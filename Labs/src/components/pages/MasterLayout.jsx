import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

// import ScrollSidebar from '../containers/ScrollSidebar.jsx';
import Topbar from '../containers/Topbar.jsx';
import LoginPage from '../containers/LoginPage.jsx';
import ContentForm from '../containers/ContentForm.jsx';
import DefaultContent from '../containers/DefaultContent.jsx';
import Dashboard from '../containers/Dashboard.jsx';



const DefaultPage = (props) => {
    return (<DefaultContent />)
}


function MasterLayout() {
    return (
        <React.Fragment>
            <div id="main-wrapper">
                <Topbar />
                {/* <ScrollSidebar /> */}
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
                <div className="page-wrapper">
                    <div className="container-fluid">
                        <Switch>
                            <Route exact path="/" component={DefaultPage} />
                            <Route path="/login" component={LoginPage} />
                            <Route path="/register" component={ContentForm} />
                            <Route path="/dashboard" component={Dashboard} />
                        </Switch>

                    </div>
                </div>
            </div>
            <footer class="footer text-center">
                All Rights Reserved by Matrix-admin. Designed and Developed by <a href="https://wrappixel.com">WrapPixel</a>.
            </footer>
        </React.Fragment>

    );
}
export default MasterLayout;