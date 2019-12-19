import React from 'react';

export default class ContentForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = { 
            fname: "",
            lname: "",
            password: "",
            passwordRepeat: "",
            email: ""
         };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ fname: event.target.value });
        console.log(this.state.fname);
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.fname);
        event.preventDefault();
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-8">
                    <div className="card">
                        <form className="form-horizontal" onSubmit={this.handleSubmit}>
                            <div className="card-body">
                                <h4 className="card-title">Registration Form</h4>
                                <div className="form-group row">
                                    <label htmlFor="fname" className="col-sm-4 text-right control-label col-form-label">First Name</label>
                                    <div className="col-sm-8">
                                        <input type="text" className="form-control" id="fname" placeholder="First Name Here..." fname={this.state.fname} onBlur={this.handleChange}></input>
                                    </div >
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="lname" className="col-sm-4 text-right control-label col-form-label">Last Name</label>
                                    <div className="col-sm-8">
                                        <input type="text" className="form-control" id="lname" placeholder="Last Name Here..."></input>
                                    </div >
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="password" className="col-sm-4 text-right control-label col-form-label">Password</label>
                                    <div className="col-sm-8">
                                        <input type="text" className="form-control" id="password" placeholder="Password Here..."></input>
                                    </div >
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="passwordRepeat" className="col-sm-4 text-right control-label col-form-label">Repeat Password</label>
                                    <div className="col-sm-8">
                                        <input type="text" className="form-control" id="passwordRepeat" placeholder="Repeat Password Here..."></input>
                                    </div >
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="email" className="col-sm-4 text-right control-label col-form-label">Email</label>
                                    <div className="col-sm-8">
                                        <input type="text" className="form-control" id="email" placeholder="Email Here..."></input>
                                    </div >
                                </div>
                                <div className="border-top">
                                    <div className="card-body">
                                        <button type="submit" className="btn btn-primary">Save</button>
                                        <button type="submit" className="btn btn-secondary">Cancel</button>
                                    </div>

                                </div>





                            </div>
                        </form >
                    </div>
                </div>
            </div>


        );
    }
}