import React from 'react';

import axios from 'axios';
import httpsProxyAgent from 'https-proxy-agent';

import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css';

import './TableToolkitPaginationPage.css';

import paginationFactory, { PaginationProvider, PaginationListStandalone, SizePerPageDropdownStandalone } from 'react-bootstrap-table2-paginator';

// import { usersData } from '../data/UsersData';
const findUsersUrl = "http://localhost:8080/rest/user/all";
const deleteUserUrl = "http://localhost:8080/rest/user/delete/";

const { SearchBar } = Search;

const selectRow = {
    mode: 'checkbox',
    clickToSelect: true,
};

const userDetails = (e) => {
    // console.log(e.target);
    let { id } = e.target;

    console.log("See Details for Id: " + id);
    //hashHistory.push('/contacts/details/'+id);
}

const deleteUser = (e) => {
    var agent = new httpsProxyAgent('http://kn.proxy.int.kn:80');
        var config = {
            httpsAgent: agent
        }
    let { id } = e.target;
    axios.get(deleteUserUrl+id, config)
    .then(data =>
        this.setState({
          isLoading: false,
        }))
    .catch((exception) => {
        console.log(exception);
    });
}

const formatProductDetailsButtonCell = (cell, row) => {
    let clickHandler = deleteUser;
    let emptyContent = React.createElement('i', { id: row.id });
    let viewBtn = React.createElement('button', { id: row.id, className: "btnNtfcdDetails btn-action mdi mdi-account-remove btn-danger", onClick: clickHandler }, emptyContent);

    return viewBtn;
}

const formatProductDetailsButtonCell2 = (cell, row) => {
    let clickHandler = userDetails;
    let emptyContent = React.createElement('i', { id: row.id });
    let editBtn = React.createElement('button', { id: row.id, className: "btnNtfcdDetails btn-action mdi mdi-account-edit btn-warning", onClick: clickHandler }, emptyContent);
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
    dataField: 'password',
    text: 'Password',
    style: { color: "lightgray" }
}, {
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

const rowEvents = {
    onClick: (e, row, rowIndex) => {
      console.log(`clicked on row with index: ${rowIndex}`);
    },
    
  };
  



export default class TableUsers extends React.Component {
    constructor(props) {
        super(props);
        this.getDataFromDB = this.getDataFromDB.bind(this); 
        this.state = {
            isLoading: true,
            data: []
        };

        
    }


    componentDidMount() {
        this.getDataFromDB();
    }

    getDataFromDB() {
        var agent = new httpsProxyAgent('http://kn.proxy.int.kn:80');
        var config = {
            httpsAgent: agent
        }
        axios.get(findUsersUrl, config)
        .then((response) => {
            this.setState({data:response.data});
        }).catch((exception) => {
            console.log(exception);
        });
    }

    render() {

        const contentTable = ({ paginationProps, paginationTableProps }) => {
            return (
                <React.Fragment>
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
                                            wrapperClasses="row justify-content-between"
                                            classes="table-responsive"
                                            striped
                                            hover
                                            selectRow={selectRow}
                                            rowEvents={ rowEvents }
                                            {...toolkitprops.baseProps}
                                            {...paginationTableProps}
                                        />

                                    </div>);
                            }
                        }
                    </ToolkitProvider>
                </React.Fragment>
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