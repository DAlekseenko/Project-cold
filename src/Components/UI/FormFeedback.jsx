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

    _onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
            errors: {}
        });
    };

    _onSubmit = (e) => {
        const {props, state} = this;
        e.preventDefault();
        if (this._validatePhone(state.phone)) {
            if (window.ym) {
                window.ym(52948192, 'reachGoal', 'call');
            }
            props.requestCall(this.state);
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

        const {errors} = this.state
        return (
            <form className={formClass} onSubmit={this._onSubmit} onInvalid={this._onInValid}>
                <div className={inputWrapClass}>
                    <input type="text"
                           onChange={this._onChange}
                           className={classNames({
                               [inputClass]: !!inputClass,
                               'form__input--error': !!errors.name
                           })}
                           required
                           maxLength={50}
                           name="name"
                           disabled={loading}
                           placeholder="Имя"/>
                    {errors && errors.name && <label className="error">{errors.name}</label>}
                </div>
                <div className="form__line">
                    <InputMask
                        mask={"+7 (999) 999-99-99"}
                        className={classNames({
                            [inputClass]: !!inputClass,
                            'form__input--error': !!errors.phone
                        })}
                        name="phone"
                        type="tel"
                        placeholder={"+7 (***) ***-**-**"}
                        value={this.state.value}
                        disabled={loading}
                        maskChar='*'
                        required
                        onChange={this._onChange}/>
                    {errors && errors.phone && <label className="error">{errors.phone}</label>}
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
        message: feedBack.get('successMessage'),
    }), {requestCall}
)(FormFeedback);
