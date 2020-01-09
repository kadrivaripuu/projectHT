import React from 'react';
import { Redirect } from 'react-router-dom';

export default class LoginPage extends React.Component {

    constructor(props) {
        super(props);
    }

    state = {
        redirectToReferrer: false
    }


    render() {
        return (
            <div className="row justify-content-around">
                <div className="col-md-8">
                    <h4 className="card-title">Log in</h4>
                    <div className="form-group row">
                        <label htmlFor="username" className="col-sm-4 text-right control-label col-form-label">Username</label><div className="col-sm-8">
                            <input type="text" className="form-control" id="username" placeholder="Username Here..."></input>
                        </div ><br />
                    </div>
                    <div className="form-group row">
                        <label htmlFor="password" className="col-sm-4 text-right control-label col-form-label">Password</label><div className="col-sm-8">
                            <input type="text" className="form-control" id="password" placeholder="Password Here..."></input>
                        </div ><br />
                    </div>
                    <div className="border-top row">
                        <div className="card-body">
                            <button type="submit" className="btn btn-primary">Enter</button>
                        </div>
                        <div className="card-body">
                            <button type="submit" className="btn btn-secondary">Cancel</button>
                        </div>
                    </div>
                </div>


            </div >
        );
    }


}