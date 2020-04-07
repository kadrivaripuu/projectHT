import React, { Component, Fragment } from 'react';
import ReactModal from 'react-modal';
import axios from 'axios';

import { Formik, Field, useField } from 'formik';

import * as Yup from 'yup';

const saveUserUrl = "http://localhost:8080/rest/user/save";

const alpha = /^[a-zöäöüA-ZÕÄÖÜ_%+-]+( [a-zõäöüA-ZÕÄÖÜ_]+)*$/;
const alphaNums = /^[a-zA-Z0-9._%+-]/;

const validation = Yup.object().shape({
    fname: Yup.string()
        .matches(alpha, { message: "Enter Valid Name", excludeEmptyString: true })
        .required('Required')
        .min(2)
        .max(30),
    lname: Yup.string()
        .matches(alpha, { message: "Enter Valid Name", excludeEmptyString: true })
        .required('Required')
        .min(2)
        .max(30),
    username: Yup.string()
        .matches(alphaNums, { message: "Enter Valid Username", excludeEmptyString: true })
        .required('Required')
        .min(5)
        .max(15),
    password: Yup.string()
        .matches(alphaNums, { message: "Enter Valid Password", excludeEmptyString: true })
        .required('Required')
        .min(4),
    passwordRepeat: Yup.string()
        .matches(alphaNums, { message: "Repeat Password", excludeEmptyString: true })
        .required('Required')
        .min(4),
    email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
    terms: Yup.string()
        // .test('terms', 'You must agree to let us use your data', value => value !== false)
        .oneOf([true], 'You must accept the terms and conditions.', value => value !== false)
        .required('Required'),
});

const fields = [
    { label: 'First Name', type: 'input', name: 'fname', className: "form-control", placeholder: "First Name Here...", value: '' },
    { label: 'Last Name', type: 'input', name: 'lname', className: "form-control", placeholder: "Last Name Here...", value: '' },
    { label: 'Username', type: 'input', name: 'username', className: "form-control", placeholder: "Username Here...", value: '' },
    { label: 'Password', type: 'input', name: 'password', className: "form-control", placeholder: "Password Here...", value: '' },
    { label: 'Repeat Password', type: 'input', name: 'passwordRepeat', className: "form-control", placeholder: 'Repeat Password...', value: '' },
    { label: 'Email', type: 'email', name: 'email', className: "form-control", placeholder: "Email Here...", value: '' },
    { label: 'Agree To Send Your Data', type: 'checkbox', name: 'terms', className: "form-control", value: false },
];

export default class App extends Component {
    render() {

        return (
            <TestRegistration fields={fields} validation={validation} />
        );
    }
}

class TestRegistration extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            fname: "",
            lname: "",
            username: "",
            password: "",
            email: "",
            role: "",
            showModal: true
        };

        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.getRegistrationValues = this.getRegistrationValues.bind(this);

    }
    handleOpenModal() {
        this.setState({ showModal: true });
    }

    handleCloseModal() {
        this.setState({ showModal: false });
    }

    componentDidMount() {
        this.handleOpenModal();

    }

    getRegistrationValues(values) {
        this.setState({ fname: values.fname });
        this.setState({ lname: values.lname });
        this.setState({ username: values.username });
        this.setState({ password: values.password });
        this.setState({ email: values.email });
        this.handleSave();
    }

    handleSave(event) {
        const options = {
            headers: { "Content-Type": "application/json", "Accept": "application/json" }
        }
        axios.post(saveUserUrl, this.state, options)
            .then(
                this.handleCloseModal()
            )
            .catch((exception) => {
                console.log(exception);
            });
        event.preventDefault();
    }



    renderCheckBox(input) {
        return (
            <Fragment key={input.name}>
                <Field
                    name={input.name}
                    render={(props) => {
                        const { field } = props;
                        return (
                            <React.Fragment>
                                
                                <div className="col-sm-4"></div>
                                    <div className="col-sm-8 text-center control-label col-form-label">
                                        <input
                                            name={input.name}

                                            type="checkbox"
                                            checked={field.value}
                                            onChange={field.onChange} />
                                            <label>{input.label}</label>
                                   
                                </div>
                            </React.Fragment>
                        );
                    }}
                />
            </Fragment>

        );
    }

    renderTextArea(input) {
        return (
            <Fragment key={input.name}>
                <Field
                    name={input.name}
                    placeholder={input.placeholder}
                    render={(...props) => {
                        const { field } = props;
                        const { errors, touched } = props.form;
                        const hasError = errors[input.name] && touched[input.name] ? 'hasError' : '';
                        return (
                            <React.Fragment>
                                <label>{input.label}</label>
                                <textarea  name={input.name} {...field} id={hasError}>{input.message}
                                </textarea>
                            </React.Fragment>
                        );
                    }}
                />
            </Fragment>
        );
    }


    renderFields(inputs) {
        return inputs.map(input => {
            if (input.type === 'checkbox') {
                return this.renderCheckBox(input);
            }
            if (input.type === 'textarea') {
                return this.renderTextArea(input);
            }
            return (
                <div key={input.name} className="form-group row">
                    <Field
                        name={input.name}
                        render={(props) => {
                            const { field } = props;
                            const { errors, touched } = props.form;
                            const hasError = errors[input.name] && touched[input.name] ? 'form-control is-invalid' : 'form-control';
                            return (
                                <React.Fragment>
                                    <label className="col-sm-4 text-right control-label col-form-label">{input.label}</label>
                                    <div className="col-sm-8">
                                        <input
                                            {...field}
                                            className={hasError}
                                            placeholder={input.placeholder}
                                            id={input.name}
                                            type='text'
                                            required
                                        />
                                    </div>
                                </React.Fragment>
                            );
                        }}
                    />
                </div>
            );
        })
    }

    getInitialValues(inputs) {
        const initialValues = {};
        //if prop does not exit in the initialValues object,
        // pluck off the name and value props and add it to the initialValues object;
        inputs.forEach(field => {
            if (!initialValues[field.name]) {
                initialValues[field.name] = field.value;
            }
        });
        return initialValues;
    }

    render() {
        const initialValues = this.getInitialValues(this.props.fields);
        return (
            <ReactModal
                isOpen={this.state.showModal}
                ariaHideApp={
                    false}
                style={
                    {
                        overlay: {
                            position: 'fixed',
                            top: 100,
                            left: 220,
                            right: 20,

                            backgroundColor: 'rgba(255, 255, 255, 0.75)'
                        },
                        content: {
                            position: 'absolute',
                            top: '40px',
                            left: '40px',
                            right: '40px',
                            bottom: '40px',
                            border: '1px solid #ccc',
                            background: '#fff',
                            overflow: 'auto',
                            WebkitOverflowScrolling: 'touch',
                            borderRadius: '4px',
                            outline: 'none',
                            padding: '20px'
                        }
                    }
                }
            >

                <div className="row justify-content-around">
                    <div className="col-md-8">

                        <h3 className="card-title">Registration Form (test)</h3><br />
                        <Formik
                            onSubmit={(values) => { this.getRegistrationValues(values) }}
                            validationSchema={this.props.validation}
                            initialValues={initialValues}
                            render={(form) => {
                                // const errorMessageShow = Object.keys(form.errors).length > 0 ? 'error' : 'hidden';
                                return <Fragment>
                                    <form onSubmit={form.handleSubmit}>
                                        {/* <div className={errorMessageShow}>
                                            All fields have not been filled correctly!
                                </div> */}
                                        {this.renderFields(this.props.fields)}
                                        <div className="border-top row">
                                            <div className="card-body col-sm-3"></div>
                                            <div className="card-body col-sm-4">
                                                <button type='submit' className='btn btn-primary'>Submit</button>
                                            </div>
                                            <div className="card-body col-sm-4">
                                                <button type="reset" className="btn btn-secondary" onClick={this.handleCloseModal} >Cancel</button>
                                            </div>
                                        </div>
                                    </form>
                                </Fragment>
                            }}
                        />

                    </div>
                </div>
            </ReactModal >
        );
    }
}