import React from 'react';

import { Redirect } from 'react-router-dom';

import axios from 'axios';
import ReactModal from 'react-modal';

const dataUrl = "http://localhost:8080/rest/user/";


export default class LoginPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            username: "admin",
            password: "kn",
            showModal: true,
            toDashboard: false
        };

        this.handleLogIn = this.handleLogIn.bind(this);
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);

    }

    handleOpenModal() {
        this.setState({ showModal: true });
    }

    handleCloseModal() {
        this.setState({ showModal: false });
    }

    handleLogIn = (event) => {
    
            this.setState(() => ({
                toUsers: true
            }))
            
        event.preventDefault();

    }

    render() {
        if (this.state.toUsers === true) {
            return <Redirect to='/users' />
        }

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
                            bottom: 400,
                            backgroundColor: 'rgba(255, 255, 255, 0.5)'
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
                        <h4 className="card-title">Log in</h4>
                        <div className="form-group row">
                            <label htmlFor="username" className="col-sm-4 text-right control-label col-form-label">Username</label><div className="col-sm-8">
                                <input type="text" className="form-control" id="username" placeholder="user" value={this.state.username} onChange={(e) => this.setState({ 'username': e.target.value })}></input>
                            </div ><br />
                        </div>
                        <div className="form-group row">
                            <label htmlFor="password" className="col-sm-4 text-right control-label col-form-label">Password</label><div className="col-sm-8">
                                <input type="text" className="form-control" id="password" placeholder="kn" value={this.state.password} onChange={(e) => this.setState({ 'password': e.target.value })}></input>
                            </div ><br />
                        </div>
                        <div className="border-top row">
                            <div className="card-body col-sm-3"></div>
                            <div className="card-body col-sm-4">
                                <button type="submit" className="btn btn-primary" onClick={this.handleLogIn}>Enter</button>
                            </div>
                            <div className="card-body col-sm-5">
                                <button type="submit" className="btn btn-secondary" onClick={this.handleCloseModal}>Cancel</button>
                            </div>
                        </div>
                    </div>
                </div >
            </ReactModal>
        );
    }


}