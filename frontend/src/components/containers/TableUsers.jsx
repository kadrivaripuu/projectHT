import React from 'react';

import axios from 'axios';
import httpsProxyAgent from 'https-proxy-agent';
import ReactModal from 'react-modal';

import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css';

import './TableToolkitPaginationPage.css';

import paginationFactory, { PaginationProvider, PaginationListStandalone, SizePerPageDropdownStandalone } from 'react-bootstrap-table2-paginator';

// import { usersData } from '../data/UsersData';
const dataUrl = "http://localhost:8080/rest/user/";

const { SearchBar } = Search;

const customTotal = (from, to, size) => (
    <span className="react-bootstrap-table-pagination-total">
        Showing {from} to {to} of {size} results
    </span>
);

const paginationConfig = {

    paginationSize: 5,
    pageStartIndex: 1,
    firstPageText: 'First',
    prePageText: 'Back',
    nextPageText: 'Next',
    lastPageText: 'Last',
    nextPageTitle: 'Next page',
    prePageTitle: 'Previous page',
    firstPageTitle: 'First page',
    lastPageTitle: 'Last page',
    showTotal: true,
    paginationTotalRenderer: customTotal,
    sizePerPageList: [{
        text: '10', value: 10
    }, {
        text: '25', value: 25
    }, {
        text: '50', value: 50
    }, {
        text: '100', value: 100
    }, {
        text: 'All', value: 1000
    }] // A numeric array is also available. the purpose of above example is custom the text
};




export default class TableUsers extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [{
                id: '',
                fname: '',
                lname: '',
                username: '',
                password: '',
                email: '',
                role: ''
            }],
            showModal: false
        };

        this.getDataFromDB = this.getDataFromDB.bind(this);

    }


    componentDidMount() {
        this.getDataFromDB();
    }

    getDataFromDB() {
        var agent = new httpsProxyAgent('http://kn.proxy.int.kn:80');
        var config = {
            httpsAgent: agent
        }

        axios.get(dataUrl + "all", config)
            .then((response) => {
                this.setState({ data: response.data });
            }).catch((exception) => {
                console.log(exception);
            });
    }




    render() {
        const handleCloseModal = (e) => {
            this.setState({ showModal: false });
        }

        const handleSave = (e) => {
            const options = {
                headers: { "Content-Type": "application/json", "Accept": "application/json" }
            }
            axios.post(dataUrl + "save", this.state, options)
                .then(
                    handleCloseModal
                )
                .then(
                    this.getDataFromDB()
                )
                .then(
                    this.getDataFromDB()
                )
                .catch((exception) => {
                    console.log(exception);
                });
            e.preventDefault();

        }

        //Somehow I fixed that in Login...A component is changing an uncontrolled input of type text to be controlled. 
        //Input elements should not switch from uncontrolled to controlled (or vice versa). 
        //Decide between using a controlled or uncontrolled input element for the lifetime of the component. 
        const getUserDetails = (e) => {
            var agent = new httpsProxyAgent('http://kn.proxy.int.kn:80');
            var config = {
                httpsAgent: agent
            }

            let { id } = e.target;
            axios.get(dataUrl + id, config)
                .then((response) => {
                    this.setState({ showModal: true })
                    this.setState({ id: response.data.data.id });
                    this.setState({ fname: response.data.data.fname });
                    this.setState({ lname: response.data.data.lname });
                    this.setState({ username: response.data.data.username });
                    this.setState({ password: response.data.data.password });
                    this.setState({ email: response.data.data.email });
                    if (response.data.data.role == null) {
                        this.setState({ role: '' });
                    } else {
                        this.setState({ role: response.data.data.role });
                    }
                })
                .catch((exception) => {
                    console.log(exception);
                });
        }

        const deleteUser = (e) => {
            var agent = new httpsProxyAgent('http://kn.proxy.int.kn:80');
            var config = {
                httpsAgent: agent
            }
            let { id } = e.target;
            axios.get(dataUrl + "delete/" + id, config)
                // if I have time, figure out how to rerender after Delete...
                .then(
                    this.getDataFromDB()
                )
                .then(
                    this.getDataFromDB()
                )
                .catch((exception) => {
                    console.log(exception);
                });
        }

        const formatProductDetailsButtonCell = (cell, row) => {
            let emptyContent = React.createElement('i', { id: row.id });
            let delBtn = React.createElement('button', { id: row.id, className: "btnNtfcdDetails btn-action mdi mdi-account-remove btn-danger", onClick: deleteUser }, emptyContent);
            return delBtn;
        }

        const formatProductDetailsButtonCell2 = (cell, row) => {
            let emptyContent = React.createElement('i', { id: row.id });
            let editBtn = React.createElement('button', { id: row.id, className: "btnNtfcdDetails btn-action mdi mdi-account-edit btn-warning", onClick: getUserDetails }, emptyContent);
            return editBtn;
        }

        const columns = [{
            dataField: 'id',
            text: 'ID',
            sort: true
        }, {
            dataField: 'fname',
            text: 'First Name',
            sort: true
        }, {
            dataField: 'lname',
            text: 'Last Name',
            sort: true
        }, {
            dataField: 'username',
            text: 'Username',
            sort: true
        }, {
            //     dataField: 'password',
            //     text: 'Password',
            //     style: { color: "lightgray" }
            // }, {
            dataField: 'email',
            text: 'Email',
            sort: true
        }, {
            dataField: 'role',
            text: 'Role',
            sort: true
        }, {
            dataField: 'edit',
            text: '[Edit]',
            formatter: formatProductDetailsButtonCell2
        }, {
            dataField: 'delete',
            text: '[Delete]',
            formatter: formatProductDetailsButtonCell
        }];

        const contentTable = ({ paginationProps, paginationTableProps }) => {
            return (

                <div className="card-body">
                    <ToolkitProvider
                        keyField="id"
                        columns={columns}
                        data={this.state.data}
                        search

                        bootstrap4
                    >
                        {
                            (toolkitprops) => {
                                return (
                                    <div>
                                        <div className="row justify-content-left">
                                            <div className="col-sm-8">
                                                <h4 className="card-title">All Users</h4>
                                            </div>
                                            <div className="col-sm-4">
                                                <SearchBar {...toolkitprops.searchProps} />
                                            </div>
                                        </div>
                                        <br />

                                        <BootstrapTable
                                            wrapperClasses="row justify-content-center"
                                            classes="col-10 table-responsive"
                                            striped
                                            hover
                                            {...toolkitprops.baseProps}
                                            {...paginationTableProps}
                                        />
                                    </div>);
                            }
                        }
                    </ToolkitProvider>
                    <ReactModal
                        isOpen={this.state.showModal}
                        ariaHideApp={false}
                        style={
                            {
                                overlay: {
                                    position: 'fixed',
                                    top: 150,
                                    left: 250,
                                    right: 100,
                                    bottom: 100,
                                    backgroundColor: 'rgba(255, 255, 255, 1)'
                                },
                                content: {
                                    position: 'absolute',
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
                                <h4 className="card-title">About {this.state.fname} {this.state.lname}:</h4>
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
                                    <label htmlFor="email" className="col-sm-4 text-right control-label col-form-label">Email</label>
                                    <div className="col-sm-8">
                                        <input type="text" className="form-control" id="email" placeholder="Email Here..." value={this.state.email} onChange={(e) => this.setState({ 'email': e.target.value })} />
                                    </div >
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="role" className="col-sm-4 text-right control-label col-form-label">Role(s)</label>
                                    <div className="col-sm-8">
                                        <input type="text" className="form-control" id="role" placeholder="Enter Role(s) Here..." value={this.state.role} onChange={(e) => this.setState({ 'role': e.target.value })} />
                                    </div >
                                </div>

                                <div className="border-top row">
                                    <div className="card-body">
                                        <button type="submit" className="btn btn-primary" onClick={handleSave}>Save</button>
                                    </div>
                                    <div className="card-body">
                                        <button type="submit" className="btn btn-secondary" onClick={handleCloseModal}>Cancel</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ReactModal>
                </div>
            );
        }




        return (
            <div className="justify-content-center">
                <div>
                    <PaginationProvider pagination={paginationFactory(paginationConfig)} >
                        {contentTable}
                    </PaginationProvider>
                </div>
            </div>
        );
    }
}