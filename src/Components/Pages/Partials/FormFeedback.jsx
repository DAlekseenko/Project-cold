import React, {Component} from 'react';
import {connect} from 'react-redux';
import propTypes from 'prop-types'
import classNames from 'classnames'
import {requestCall} from "../../../Reducers/Requests/feedBackRequests";


export class FormFeedback extends Component {

    static props = {
        formClass: propTypes.string,
        inputWrapClass: propTypes.string,
        inputClass: propTypes.string,
        buttonWrapClass: propTypes.string,
        buttonClass: propTypes.string
    };

    state = {
        name: '',
        phone: '',
        errors: {}
    };

    componentWillReceiveProps(nextProps) {
        // nextProps.errors && this.setState({errors: nextProps.errors});
    }

    _onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
            errors: {}
        });
    };

    _onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
        this.props.requestCall && this.props.requestCall(this.state);
    };

    _onInValid = (e) => {
        e.preventDefault();
        for (let {validationMessage, name} of e.target.form.elements) {
            validationMessage && this.setState({errors: {[name]: validationMessage}})
        }
    };

    render() {
        const {formClass, inputWrapClass, inputClass, buttonWrapClass, buttonClass, message, loading} = this.props;

        return (
            <form className={formClass} method="POST" onSubmit={this._onSubmit} onInvalid={this._onInValid}>
                <div className={inputWrapClass}>
                    <input type="text"
                           onChange={this._onChange}
                           className={classNames({
                               [inputClass]: !!inputClass,
                               'form__input--error': this.state.errors['name']
                           })}
                           required
                           name="name"
                           placeholder="Имя"/>
                    {this.state.errors['name'] && <label className="error">{this.state.errors['name']}</label>}
                </div>
                <div className="form__line">
                    <input type="tel"
                           onChange={this._onChange}
                           className={classNames({
                               [inputClass]: !!inputClass,
                               'form__input--error': this.state.errors['phone']
                           })}
                           required
                           name="phone"
                           placeholder="Телефон"/>
                    {this.state.errors['phone'] && <label className="error">{this.state.errors['phone']}</label>}
                </div>
                <div>{message}</div>
                <div className={buttonWrapClass}>
                    <button className={buttonClass} disabled={loading}>Оставить заявку</button>
                </div>
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
