import React from 'react';

import axios from 'axios';
import httpsProxyAgent from 'https-proxy-agent';
import ReactModal from 'react-modal';

const mockDataUrl = 'https://my.api.mockaroo.com/Users.json?key=23973c80';
const saveUserUrl = "http://localhost:8080/rest/user/save";


export default class ContentForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            fname: "",
            lname: "",
            username: "",
            password: "",
            email: "",
            showModal: true
        };

        this.handleSave = this.handleSave.bind(this);
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

   

    
    handleOpenModal() {
        this.setState({ showModal: true });
    }

    handleCloseModal() {
        this.setState({ showModal: false });
    }

    componentDidMount() {
        // console.log("load data from mockaroo");
        this.getDataFromMockaroo();

    }

    getDataFromMockaroo() {

        var agent = new httpsProxyAgent('http://kn.proxy.int.kn:80');
        var config = {
            httpsAgent: agent
        }

        axios.get(mockDataUrl, config)
            .then((response) => {

                this.setState({ fname: response.data.fname });
                this.setState({ lname: response.data.lname });
                this.setState({ username: response.data.username });
                this.setState({ password: response.data.password });
                this.setState({ email: response.data.email });
            }).catch((exception) => {
                console.log(exception);
            });
    }


    handleSave(event) {
        const options = {
            headers: { "Content-Type": "application/json", "Accept": "application/json" }
        }
        axios.post(saveUserUrl, this.state, options)
            // .then(
            //     this.handleCloseModal
            // )
            .catch((exception) => {
                console.log(exception);
            });
        event.preventDefault();
    }



    
    render() {
        return (
            <ReactModal
                isOpen={this.state.showModal}
                ariaHideApp={
                    false}
                style={
                    {
                        overlay: {
                            position: 'fixed',
                            top: 65,
                            left: 220,
                            right: 20,
                            bottom: 100,
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
                    <div className="col-md-8 ">
                        <h4 className="card-title">Registration Form</h4>
                        <div className="form-group row">
                            <label htmlFor="fname" className="col-sm-4 text-right control-label col-form-label">First Name</label>
                            <div className="col-sm-8">
                                <input type="text" className="form-control" id="fname" placeholder="First Name Here..." value={this.state.fname} onChange={(e) => this.setState({ 'fname': e.target.value })} />
                            </div >
                        </div>
                        <div className="form-group row">
                            <label htmlFor="lname" className="col-sm-4 text-right control-label col-form-label">Last Name</label>
                            <div className="col-sm-8">
                                <input type="text" className="form-control" id="lname" placeholder="Last Name Here..." value={this.state.lname} onChange={(e) => this.setState({ 'lname': e.target.value })} />
                            </div >
                        </div>
                        <div className="form-group row">
                            <label htmlFor="username" className="col-sm-4 text-right control-label col-form-label">Username</label>
                            <div className="col-sm-8">
                                <input type="text" className="form-control" id="username" placeholder="Username Here..." value={this.state.username} onChange={(e) => this.setState({ 'username': e.target.value })} />
                            </div >
                        </div>
                        <div className="form-group row">
                            <label htmlFor="password" className="col-sm-4 text-right control-label col-form-label">Password</label>
                            <div className="col-sm-8">
                                <input type="text" className="form-control" id="password" placeholder="Password Here..." value={this.state.password} onChange={(e) => this.setState({ 'password': e.target.value })} />
                            </div >
                        </div>
                        <div className="form-group row">
                            <label htmlFor="passwordRepeat" className="col-sm-4 text-right control-label col-form-label">Repeat Password</label>
                            <div className="col-sm-8">
                                <input type="text" className="form-control" id="passwordRepeat" placeholder="Repeat Password Here..." />
                            </div >
                        </div>
                        <div className="form-group row">
                            <label htmlFor="email" className="col-sm-4 text-right control-label col-form-label">Email</label>
                            <div className="col-sm-8">
                                <input type="text" className="form-control" id="email" placeholder="Email Here..." value={this.state.email} onChange={(e) => this.setState({ 'email': e.target.value })} />
                            </div >
                        </div>

                        <div className="border-top row">
                            <div className="card-body">
                                <button type="submit" className="btn btn-primary" onClick={this.handleSave}>Save</button>
                            </div>
                            <div className="card-body">
                                <button type="submit" className="btn btn-secondary" onClick={this.handleCloseModal}>Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>

            </ReactModal>

        );
    }
}