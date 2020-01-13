import React from 'react';
import { Link } from 'react-router-dom';


export default class ScrollSidebar extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (

            // <li className="sidebar-item"> <a className="sidebar-link waves-effect waves-dark sidebar-link" href="index.html" aria-expanded="false"><i className="mdi mdi-view-dashboard"></i><span className="hide-menu">Dashboard</span></a></li>
            // <li className="sidebar-item"> <a className="sidebar-link waves-effect waves-dark sidebar-link" href="widgets.html" aria-expanded="false"><i className="mdi mdi-chart-bubble"></i><span className="hide-menu">Widgets</span></a></li>
            // <li className="sidebar-item"> <a className="sidebar-link waves-effect waves-dark sidebar-link" href="tables.html" aria-expanded="false"><i className="mdi mdi-border-inside"></i><span className="hide-menu">Tables</span></a></li>
            // <li className="sidebar-item"> <a className="sidebar-link waves-effect waves-dark" href="form-basic.html" aria-expanded="false"><i className="mdi mdi-note-outline"></i><span className="hide-menu">Form Basic</span></a></li>
            // <li className="sidebar-item"> <a className="sidebar-link waves-effect waves-dark sidebar-link" href="pages-buttons.html" aria-expanded="false"><i className="mdi mdi-relative-scale"></i><span className="hide-menu">Buttons</span></a></li>
            // <li className="sidebar-item"> <a className="sidebar-link waves-effect waves-dark sidebar-link" href="pages-elements.html" aria-expanded="false"><i className="mdi mdi-pencil"></i><span className="hide-menu">Elements</span></a></li>
            // <li className="sidebar-item"> <a className="sidebar-link waves-effect waves-dark sidebar-link" href="pages-calendar.html" aria-expanded="false"><i className="mdi mdi-calendar-check"></i><span className="hide-menu">Calendar </span></a></li>
            // <li className="sidebar-item"> <a className="sidebar-link has-arrow waves-effect waves-dark" href="login.html" aria-expanded="false"><i className="mdi mdi-account-key"></i><span className="hide-menu" onClick={() => this.setState({selectedPage: "login"})}>Login</span></a></li>
            // <li className="sidebar-item"> <a className="sidebar-link has-arrow waves-effect waves-dark" href="register.html" aria-expanded="false"><i className="mdi mdi-all-inclusive"></i><span className="hide-menu">Register</span></a></li>

            <aside className="left-sidebar" data-sidebarbg="skin5">
                <div className="scroll-sidebar">
                    <nav className="sidebar-nav">
                        <ul id="sidebarnav" className="p-t-30">
                            <li className="sidebar-item">
                                <Link to="/dashboard" className="sidebar-link waves-effect waves-dark sidebar-link" aria-expanded="false"><i className="mdi mdi-view-dashboard"></i>
                                    <span className="hide-menu">Dashboard</span>
                                </Link>
                            </li>
                            <li className="sidebar-item">
                                <Link to="/addproject" className="sidebar-link waves-effect waves-dark sidebar-link" aria-expanded="false"><i className="mdi mdi-pencil"></i>
                                    <span className="hide-menu">Add project</span>
                                </Link>
                            </li>
                            <li className="sidebar-item">
                                <Link to="/tables" className="sidebar-link waves-effect waves-dark sidebar-link" aria-expanded="false"><i className="mdi mdi-border-inside"></i>
                                    <span className="hide-menu">Tables</span></Link>
                            </li>
                            <li className="sidebar-item">
                                <Link to="/users" className="sidebar-link waves-effect waves-dark sidebar-link" aria-expanded="false"><i className="mdi mdi-chart-bubble"></i>
                                    <span className="hide-menu">All Users</span></Link>
                            </li>
                            <li className="sidebar-item">
                                <Link to="/login" className="sidebar-link has-arrow waves-effect waves-dark" aria-expanded="false"><i className="mdi mdi-account-key"></i>
                                    <span className="hide-menu">Login</span>
                                </Link>
                            </li>
                            <li className="sidebar-item">
                                <Link to="/register" className="sidebar-link has-arrow waves-effect waves-dark" aria-expanded="false"><i className="mdi mdi-all-inclusive"></i>
                                    <span className="hide-menu">Register</span>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </aside>




        );
    }
}