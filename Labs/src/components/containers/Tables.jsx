import React from 'react';

import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import { tasklistData } from '../data/TasklistData.js';


const selectRow = {
    mode: 'checkbox',
    clickToSelect: true,
};

const productDetails = (e) => {
    //console.log(e.target);
    var { id } = e.target;
    console.log("See Details for Id: " + id);
    //hashHistory.push('/contacts/details/'+id);
}

const formatProductDetailsButtonCell = (cell, row) => {
    let clickHandler = productDetails;
    var emptyContent = React.createElement('i', { id: row.id, onClick: clickHandler });
    var aBtn = React.createElement('a', { id: row.id, className: "btnNtfcdDetails btn-action glyphicons eye_open btn-success", onClick: clickHandler }, emptyContent);
    return aBtn;
}

const columns = [{
    dataField: 'id',
    text: 'Item ID',
    sort: true
}, {
    dataField: 'task_name',
    text: 'Task Name',
    sort: true
}, {
    dataField: 'task_id',
    text: 'Task ID'
}, {
    dataField: 'task_description',
    text: 'Task Description'
}, {
    dataField: 'assigned_to',
    text: 'Assigned To User'
}, {
    dataField: 'due_date',
    text: 'Task Due Date',
    sort: true
}, {
    dataField: 'repeating',
    text: 'Repeat times'
}, {
    dataField: 'has_subtasks',
    text: 'Has Subtasks'
}, {
    dataField: 'related_subtasks',
    text: 'Related Subtasks'
}, {
    dataField: '',
    text: 'Action',
    formatter: formatProductDetailsButtonCell
}];

export default class Tables extends React.Component {
    constructor(props) {
        super(props);
    }



    render() {
        return (
            <React.Fragment>
                <h4>Table Demo:</h4>

                <BootstrapTable
                    keyField='id' data={tasklistData} columns={columns}
                    
                    striped
                    hover
                    selectRow={selectRow}
                />

            </React.Fragment>
        );
    }
}