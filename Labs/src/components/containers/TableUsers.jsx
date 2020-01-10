import React from 'react';

import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css';

import './TableToolkitPaginationPage.css';

import paginationFactory, { PaginationProvider, PaginationListStandalone, SizePerPageDropdownStandalone } from 'react-bootstrap-table2-paginator';

import { usersData } from '../data/UsersData';

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

const formatProductDetailsButtonCell = (cell, row) => {
    let clickHandler = userDetails;
    let emptyContent = React.createElement('i', { id: row.id});
    let viewBtn = React.createElement('button', { id: row.id, className: "btnNtfcdDetails btn-action glyphicons eye_open btn-info", onClick: clickHandler}, emptyContent);

    return viewBtn;
}

const formatProductDetailsButtonCell2 = (cell, row) => {
    let clickHandler = userDetails;
    let emptyContent = React.createElement('i', { id: row.id});
    let editBtn = React.createElement('button', { id: row.id, className: "btnNtfcdDetails btn-action glyphicons pencil btn-warning", onClick: clickHandler}, emptyContent);
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
    text: 'password',
    style:  { color: "lightgray"}
}, {
    dataField: 'email',
    text: 'Email',
    sort: true
}, {
    dataField: 'role',
    text: 'Role',
    sort: true
}, {
    dataField: 'view',
    text: '[View]',
    formatter: formatProductDetailsButtonCell
}, {
    dataField: 'edit',
    text: '[Edit]',
    formatter: formatProductDetailsButtonCell2
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
        text: 'All', value: usersData.length
    }] // A numeric array is also available. the purpose of above example is custom the text
};


export default class TableUsers extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        const contentTable = ({ paginationProps, paginationTableProps }) => {
            return (
                <React.Fragment>
                    <ToolkitProvider
                        keyField="id"
                        columns={columns}
                        data={usersData}
                        search
                        bootstrap4
                    >
                        {
                            (toolkitprops) => {
                                return (
                                    <div>
                                        <div className="form-group row">
                                            <div className="col-sm-8">
                                            </div>
                                            <div className="col-sm-4">
                                                <SearchBar {...toolkitprops.searchProps} />
                                            </div>
                                        </div>
                                        <br />
                                        <BootstrapTable
                                            classes="table-responsive"
                                            striped
                                            hover
                                            selectRow={selectRow}
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
            <React.Fragment>
                <h4 className="card-title">All Users</h4>
                <PaginationProvider pagination={paginationFactory(paginationConfig)} >
                    {contentTable}
                </PaginationProvider>
            </React.Fragment>
        );
    }
}