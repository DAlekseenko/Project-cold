import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import propTypes from 'prop-types'
import classNames from 'classnames'
import {requestCall} from '../../Reducers/Requests/feedBackRequests'
import InputMask from 'react-input-mask';
import {preparePhone} from "../../../libs/helper"


export class FormFeedback extends PureComponent {

    static props = {
        formClass: propTypes.string,
        inputWrapClass: propTypes.string,
        inputClass: propTypes.string,
        buttonWrapClass: propTypes.string,
        buttonClass: propTypes.string,
        requestCall: propTypes.func.isRequired
    };

    state = {
        name: '',
        phone: '',
        errors: {}
    };

    componentWillReceiveProps(nextProps) {
        nextProps.errors && this.setState({errors: nextProps.errors});
    }

    _onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
            errors: {}
        });
    };

    _onSubmit = (e) => {
        e.preventDefault();
        if (this._validatePhone(this.state.phone)) {
            this.props.requestCall(this.state);
        }
    }

    _validatePhone = phone => {
        if (preparePhone(phone).length < 11) {
            this.setState({errors: {phone: 'Неверный номер телефона'}})
            return false
        }
        return true
    }

    _onInValid = (e) => {
        e.preventDefault();
        const errors = {}
        for (let {validationMessage, name} of e.target.form.elements) {
            errors[name] = validationMessage
        }
        this.setState({errors})
    }

    render() {
        const {formClass, inputWrapClass, inputClass, buttonWrapClass, buttonClass, message, loading} = this.props;

        return (
            <form className={formClass} onSubmit={this._onSubmit} onInvalid={this._onInValid}>
                <div className={inputWrapClass}>
                    <input type="text"
                           onChange={this._onChange}
                           className={classNames({
                               [inputClass]: !!inputClass,
                               'form__input--error': this.state.errors['name']
                           })}
                           required
                           maxLength={50}
                           name="name"
                           disabled={!!message || loading}
                           placeholder="Имя"/>
                    {this.state.errors['name'] && <label className="error">{this.state.errors['name']}</label>}
                </div>
                <div className="form__line">
                    <InputMask
                        mask={"+7 (999) 999-99-99"}
                        className={classNames({
                            [inputClass]: !!inputClass,
                            'form__input--error': this.state.errors['phone']
                        })}
                        name="phone"
                        type="tel"
                        placeholder={"+7 (***) ***-**-**"}
                        value={this.state.value}
                        disabled={!!message || loading}
                        maskChar='*'
                        required
                        onChange={this._onChange}/>
                    {this.state.errors['phone'] && <label className="error">{this.state.errors['phone']}</label>}
                </div>
                <div className={buttonWrapClass}>
                    <button className={buttonClass} disabled={!!message || loading}>Оставить заявку</button>
                </div>
                {message && <div className="success__message">{message}</div>}
            </form>
        );
    }
}

export default connect(
    ({feedBack}) => ({
        loading: feedBack.get('loading'),
        errors: feedBack.get('errors'),
        message: feedBack.get('successMessage'),
    }), {requestCall}
)(FormFeedback);
