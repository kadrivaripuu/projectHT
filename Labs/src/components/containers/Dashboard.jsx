import React from 'react';



export default class Dashboard extends React.Component {
    constructor(props) {
        super(props);
    }



    render() {
        return (
            <React.Fragment>
                <div className="row justify-content-around" >

                    <div className="col-md-6 col-lg-3">
                        <div className="card card-hover">
                            <div className="box bg-success text-center">
                                <h1 className="font-light text-white"><i className="mdi mdi-chart-areaspline"></i></h1>
                                <h6 className="text-white">Charts (Do something)</h6>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-3">
                        <div className="card card-hover">
                            <div className="box bg-warning text-center">
                                <h1 className="font-light text-white"><i className="mdi mdi-collage"></i></h1>
                                <h6 className="text-white">Widgets (Do something)</h6>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-3">
                        <div className="card card-hover">
                            <div className="box bg-danger text-center">
                                <h1 className="font-light text-white"><i className="mdi mdi-border-outside"></i></h1>
                                <h6 className="text-white">Tables (Do something)</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Latest Posts</h4>
                            </div>
                            <div className="comment-widgets scrollable">

                                <div className="d-flex flex-row comment-row m-t-0">
                                    <div className="p-2"><img src="assets/images/users/1.jpg" alt="user" width="50" className="rounded-circle" /></div>
                                    <div className="comment-text w-100">
                                        <h6 className="font-medium">James Anderson</h6>
                                        <span className="m-b-15 d-block">Lorem Ipsum is simply dummy text of the printing and type setting industry. </span>
                                        <div className="comment-footer">
                                            <span className="text-muted float-right">April 14, 2016</span>
                                            <button type="button" className="btn btn-cyan btn-sm">Edit</button>
                                            <button type="button" className="btn btn-success btn-sm">Publish</button>
                                            <button type="button" className="btn btn-danger btn-sm">Delete</button>
                                        </div>
                                    </div>
                                </div>

                                <div className="d-flex flex-row comment-row">
                                    <div className="p-2"><img src="assets/images/users/4.jpg" alt="user" width="50" className="rounded-circle" /></div>
                                    <div className="comment-text active w-100">
                                        <h6 className="font-medium">Michael Jorden</h6>
                                        <span className="m-b-15 d-block">Lorem Ipsum is simply dummy text of the printing and type setting industry. </span>
                                        <div className="comment-footer">
                                            <span className="text-muted float-right">May 10, 2016</span>
                                            <button type="button" className="btn btn-cyan btn-sm">Edit</button>
                                            <button type="button" className="btn btn-success btn-sm">Publish</button>
                                            <button type="button" className="btn btn-danger btn-sm">Delete</button>
                                        </div>
                                    </div>
                                </div>

                                <div className="d-flex flex-row comment-row">
                                    <div className="p-2"><img src="assets/images/users/5.jpg" alt="user" width="50" className="rounded-circle" /></div>
                                    <div className="comment-text w-100">
                                        <h6 className="font-medium">Johnathan Doeting</h6>
                                        <span className="m-b-15 d-block">Lorem Ipsum is simply dummy text of the printing and type setting industry. </span>
                                        <div className="comment-footer">
                                            <span className="text-muted float-right">August 1, 2016</span>
                                            <button type="button" className="btn btn-cyan btn-sm">Edit</button>
                                            <button type="button" className="btn btn-success btn-sm">Publish</button>
                                            <button type="button" className="btn btn-danger btn-sm">Delete</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">To Do List</h4>
                                <div className="todo-widget scrollable" style={{ height: "450px" }}>
                                    <ul className="list-task todo-list list-group m-b-0" data-role="tasklist">
                                        <li className="list-group-item todo-item" data-role="task">
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="customCheck" />
                                                <label className="custom-control-label todo-label" for="customCheck">
                                                    <span className="todo-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span> <span className="badge badge-pill badge-danger float-right">Today</span>
                                                </label>
                                            </div>
                                            <ul className="list-style-none assignedto">
                                                <li className="assignee"><img className="rounded-circle" width="40" src="assets/images/users/1.jpg" alt="user" data-toggle="tooltip" data-placement="top" title="" data-original-title="Steave" /></li>
                                                <li className="assignee"><img className="rounded-circle" width="40" src="assets/images/users/2.jpg" alt="user" data-toggle="tooltip" data-placement="top" title="" data-original-title="Jessica" /></li>
                                                <li className="assignee"><img className="rounded-circle" width="40" src="assets/images/users/3.jpg" alt="user" data-toggle="tooltip" data-placement="top" title="" data-original-title="Priyanka" /></li>
                                                <li className="assignee"><img className="rounded-circle" width="40" src="assets/images/users/4.jpg" alt="user" data-toggle="tooltip" data-placement="top" title="" data-original-title="Selina" /></li>
                                            </ul>
                                        </li>
                                        <li className="list-group-item todo-item" data-role="task">
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                                <label className="custom-control-label todo-label" for="customCheck1">
                                                    <span className="todo-desc">Lorem Ipsum is simply dummy text of the printing</span><span className="badge badge-pill badge-primary float-right">1 week </span>
                                                </label>
                                            </div>
                                            <div className="item-date"> 26 jun 2017</div>
                                        </li>
                                        <li className="list-group-item todo-item" data-role="task">
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="customCheck2" />
                                                <label className="custom-control-label todo-label" for="customCheck2">
                                                    <span className="todo-desc">Give Purchase report to</span> <span className="badge badge-pill badge-info float-right">Yesterday</span>
                                                </label>
                                            </div>
                                            <ul className="list-style-none assignedto">
                                                <li className="assignee"><img className="rounded-circle" width="40" src="assets/images/users/3.jpg" alt="user" data-toggle="tooltip" data-placement="top" title="" data-original-title="Priyanka" /></li>
                                                <li className="assignee"><img className="rounded-circle" width="40" src="assets/images/users/4.jpg" alt="user" data-toggle="tooltip" data-placement="top" title="" data-original-title="Selina" /></li>
                                            </ul>
                                        </li>
                                        <li className="list-group-item todo-item" data-role="task">
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="customCheck3" />
                                                <label className="custom-control-label todo-label" for="customCheck3">
                                                    <span className="todo-desc">Lorem Ipsum is simply dummy text of the printing </span> <span className="badge badge-pill badge-warning float-right">2 weeks</span>
                                                </label>
                                            </div>
                                            <div className="item-date"> 26 jun 2017</div>
                                        </li>
                                        <li className="list-group-item todo-item" data-role="task">
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="customCheck4" />
                                                <label className="custom-control-label todo-label" for="customCheck4">
                                                    <span className="todo-desc">Give Purchase report to</span> <span className="badge badge-pill badge-info float-right">Yesterday</span>
                                                </label>
                                            </div>
                                            <ul className="list-style-none assignedto">
                                                <li className="assignee"><img className="rounded-circle" width="40" src="assets/images/users/3.jpg" alt="user" data-toggle="tooltip" data-placement="top" title="" data-original-title="Priyanka" /></li>
                                                <li className="assignee"><img className="rounded-circle" width="40" src="assets/images/users/4.jpg" alt="user" data-toggle="tooltip" data-placement="top" title="" data-original-title="Selina" /></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">

                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title m-b-0">Progress Box</h4>
                                <div className="m-t-20">
                                    <div className="d-flex no-block align-items-center">
                                        <span>81% Clicks</span>
                                        <div className="ml-auto">
                                            <span>125</span>
                                        </div>
                                    </div>
                                    <div className="progress">
                                        <div className="progress-bar progress-bar-striped" role="progressbar" style={{ width: "81%" }} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="d-flex no-block align-items-center m-t-25">
                                        <span>72% Uniquie Clicks</span>
                                        <div className="ml-auto">
                                            <span>120</span>
                                        </div>
                                    </div>
                                    <div className="progress">
                                        <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{ width: "72%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="d-flex no-block align-items-center m-t-25">
                                        <span>53% Impressions</span>
                                        <div className="ml-auto">
                                            <span>785</span>
                                        </div>
                                    </div>
                                    <div className="progress">
                                        <div className="progress-bar progress-bar-striped bg-info" role="progressbar" style={{ width: "53%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="d-flex no-block align-items-center m-t-25">
                                        <span>3% Online Users</span>
                                        <div className="ml-auto">
                                            <span>8</span>
                                        </div>
                                    </div>
                                    <div className="progress">
                                        <div className="progress-bar progress-bar-striped bg-danger" role="progressbar" style={{ width: "3%" }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title m-b-0">News Updates</h4>
                            </div>
                            <ul className="list-style-none">
                                <li className="d-flex no-block card-body">
                                    <i className="fa fa-check-circle w-30px m-t-5"></i>
                                    <div>
                                        <a href="#" className="m-b-0 font-medium p-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a>
                                        <span className="text-muted">dolor sit amet, consectetur adipiscing</span>
                                    </div>
                                    <div className="ml-auto">
                                        <div className="text-right">
                                            <h5 className="text-muted m-b-0">20</h5>
                                            <span className="text-muted font-16">Jan</span>
                                        </div>
                                    </div>
                                </li>
                                <li className="d-flex no-block card-body border-top">
                                    <i className="fa fa-gift w-30px m-t-5"></i>
                                    <div>
                                        <a href="#" className="m-b-0 font-medium p-0">Congratulation Maruti, Happy Birthday</a>
                                        <span className="text-muted">many many happy returns of the day</span>
                                    </div>
                                    <div className="ml-auto">
                                        <div className="text-right">
                                            <h5 className="text-muted m-b-0">11</h5>
                                            <span className="text-muted font-16">Jan</span>
                                        </div>
                                    </div>
                                </li>
                                <li className="d-flex no-block card-body border-top">
                                    <i className="fa fa-plus w-30px m-t-5"></i>
                                    <div>
                                        <a href="#" className="m-b-0 font-medium p-0">Maruti is a Responsive Admin theme</a>
                                        <span className="text-muted">But already everything was solved. It will ...</span>
                                    </div>
                                    <div className="ml-auto">
                                        <div className="text-right">
                                            <h5 className="text-muted m-b-0">19</h5>
                                            <span className="text-muted font-16">Jan</span>
                                        </div>
                                    </div>
                                </li>
                                <li className="d-flex no-block card-body border-top">
                                    <i className="fa fa-leaf w-30px m-t-5"></i>
                                    <div>
                                        <a href="#" className="m-b-0 font-medium p-0">Envato approved Maruti Admin template</a>
                                        <span className="text-muted">i am very happy to approved by TF</span>
                                    </div>
                                    <div className="ml-auto">
                                        <div className="text-right">
                                            <h5 className="text-muted m-b-0">20</h5>
                                            <span className="text-muted font-16">Jan</span>
                                        </div>
                                    </div>
                                </li>
                                <li className="d-flex no-block card-body border-top">
                                    <i className="fa fa-question-circle w-30px m-t-5"></i>
                                    <div>
                                        <a href="#" className="m-b-0 font-medium p-0"> I am alwayse here if you have any question</a>
                                        <span className="text-muted">we glad that you choose our template</span>
                                    </div>
                                    <div className="ml-auto">
                                        <div className="tetx-right">
                                            <h5 className="text-muted m-b-0">15</h5>
                                            <span className="text-muted font-16">Jan</span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <h5 className="card-title">Calender</h5>
                        <div className="card">
                            <div className="">
                                <div className="row">
                                    <div className="col-lg-3 border-right p-r-0">
                                        <div className="card-body border-bottom">
                                            <h4 className="card-title m-t-10">Drag & Drop Event</h4>
                                        </div>
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div id="calendar-events" className="">
                                                        <div className="calendar-events m-b-20" data-className="bg-info"><i className="fa fa-circle text-info m-r-10"></i>Event One</div>
                                                        <div className="calendar-events m-b-20" data-className="bg-success"><i className="fa fa-circle text-success m-r-10"></i> Event Two</div>
                                                        <div className="calendar-events m-b-20" data-className="bg-danger"><i className="fa fa-circle text-danger m-r-10"></i>Event Three</div>
                                                        <div className="calendar-events m-b-20" data-className="bg-warning"><i className="fa fa-circle text-warning m-r-10"></i>Event Four</div>
                                                    </div>

                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" id="drop-remove" />
                                                        <label className="custom-control-label" for="drop-remove">Remove after drop</label>
                                                    </div>
                                                    <a href="" data-toggle="modal" data-target="#add-new-event" className="btn m-t-20 btn-info btn-block waves-effect waves-light">
                                                        <i className="ti-plus"></i> Add New Event
                                                        </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-9">
                                        <div className="card-body b-l calender-sidebar">
                                            <div id="calendar"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="modal none-border" id="my-event">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title"><strong>Add Event</strong></h4>
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            </div>
                            <div className="modal-body"></div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary waves-effect" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-success save-event waves-effect waves-light">Create event</button>
                                <button type="button" className="btn btn-danger delete-event waves-effect waves-light" data-dismiss="modal">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="modal fade none-border" id="add-new-event">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title"><strong>Add</strong> a category</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label className="control-label">Category Name</label>
                                            <input className="form-control form-white" placeholder="Enter name" type="text" name="category-name" />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="control-label">Choose Category Color</label>
                                            <select className="form-control form-white" data-placeholder="Choose a color..." name="category-color">
                                                <option value="success">Success</option>
                                                <option value="danger">Danger</option>
                                                <option value="info">Info</option>
                                                <option value="primary">Primary</option>
                                                <option value="warning">Warning</option>
                                                <option value="inverse">Inverse</option>
                                            </select>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-danger waves-effect waves-light save-category" data-dismiss="modal">Save</button>
                                <button type="button" className="btn btn-secondary waves-effect" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
