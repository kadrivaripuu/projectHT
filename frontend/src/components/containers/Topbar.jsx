import React from 'react';
import { Link } from 'react-router-dom';

export default class Topbar extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <header className="topbar" data-navbarbg="skin5">
                    <nav className="navbar top-navbar navbar-expand-md navbar-dark">
                        <div className="navbar-header" data-logobg="skin5">
                            <a className="nav-toggler waves-effect waves-light d-block d-md-none"><i className="ti-menu ti-close"></i></a>
                            <Link to="/" className="navbar-brand">
                                <b className="logo-icon p-l-10">
                                    <i className="wi wi-sunset"></i>
                                    <img src="assets/images/logo-icon2.png" alt="homepage" className="light-logo" />
                                </b>
                                <span className="logo-text">
                                    <img src="assets/images/logo-text2.png" alt="homepage" className="light-logo" />
                                </span>
                            </Link>
                            <a className="topbartoggler d-block d-md-none waves-effect waves-light" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><i className="ti-more"></i></a>
                        </div>

                        <div className="navbar-collapse collapse" id="navbarSupportedContent" data-navbarbg="skin5">
                            <ul className="navbar-nav float-left mr-auto">
                                <li className="nav-item d-none d-md-block"><a className="nav-link sidebartoggler waves-effect waves-light" data-sidebartype="mini-sidebar"><i className="mdi mdi-menu font-24"></i></a></li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        {/* <span className="d-none d-md-block">Create New <i className="fa fa-angle-down"></i></span> */}
                                        <span className="d-block d-md-none"><i className="fa fa-plus"></i></span>
                                    </a>
                                    {/* <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a className="dropdown-item" href="#">Action</a>
                                        <a className="dropdown-item" href="#">Another action</a>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item" href="#">Something else here</a>
                                    </div> */}
                                </li>
                                <li className="nav-item search-box"> <a className="nav-link waves-effect waves-dark" ><i className="ti-search"></i></a>
                                    <form className="app-search position-absolute">
                                        <input type="text" className="form-control" placeholder="Search &amp; enter" /> <a className="srh-btn"><i className="ti-close"></i></a>
                                    </form>
                                </li>
                            </ul>

                            <ul className="navbar-nav float-right">

                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle waves-effect waves-dark" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="mdi mdi-bell font-24"></i>
                                    </a>
                                    {/* <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a className="dropdown-item" href="#">Action</a>
                                        <a className="dropdown-item" href="#">Another action</a>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item" href="#">Something else here</a>
                                    </div> */}
                                </li>

                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle waves-effect waves-dark" id="2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="font-24 mdi mdi-comment-processing"></i>
                                    </a>
                                    {/* <div className="dropdown-menu dropdown-menu-right mailbox animated bounceInDown" aria-labelledby="2">
                                        <ul className="list-style-none">
                                            <li>
                                                <div className="">

                                                    <a className="link border-top">
                                                        <div className="d-flex no-block align-items-center p-10">
                                                            <span className="btn btn-success btn-circle"><i className="ti-calendar"></i></span>
                                                            <div className="m-l-10">
                                                                <h5 className="m-b-0">Event today</h5>
                                                                <span className="mail-desc">Just a reminder that event</span>
                                                            </div>
                                                        </div>
                                                    </a>

                                                    <a className="link border-top">
                                                        <div className="d-flex no-block align-items-center p-10">
                                                            <span className="btn btn-info btn-circle"><i className="ti-settings"></i></span>
                                                            <div className="m-l-10">
                                                                <h5 className="m-b-0">Settings</h5>
                                                                <span className="mail-desc">You can customize this template</span>
                                                            </div>
                                                        </div>
                                                    </a>

                                                    <a className="link border-top">
                                                        <div className="d-flex no-block align-items-center p-10">
                                                            <span className="btn btn-primary btn-circle"><i className="ti-user"></i></span>
                                                            <div className="m-l-10">
                                                                <h5 className="m-b-0">Pavan kumar</h5>
                                                                <span className="mail-desc">Just see the my admin!</span>
                                                            </div>
                                                        </div>
                                                    </a>

                                                    <a className="link border-top">
                                                        <div className="d-flex no-block align-items-center p-10">
                                                            <span className="btn btn-danger btn-circle"><i className="fa fa-link"></i></span>
                                                            <div className="m-l-10">
                                                                <h5 className="m-b-0">Luanch Admin</h5>
                                                                <span className="mail-desc">Just see the my new admin!</span>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </li>
                                        </ul>
                                    </div> */}
                                </li>

                                <li className="nav-item dropdown">
                                    <Link to="/" className="nav-link dropdown-toggle text-muted waves-effect waves-dark pro-pic" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img src="assets/images/users/1.jpg" alt="user" className="rounded-circle" width="31" /></Link>
                                    {/* <div className="dropdown-menu dropdown-menu-right user-dd animated">
                                        <a className="dropdown-item" ><i className="ti-user m-r-5 m-l-5"></i> My Profile</a>
                                        <a className="dropdown-item" ><i className="ti-wallet m-r-5 m-l-5"></i> My Balance</a>
                                        <a className="dropdown-item"><i className="ti-email m-r-5 m-l-5"></i> Inbox</a>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item"><i className="ti-settings m-r-5 m-l-5"></i> Account Setting</a>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item" ><i className="fa fa-power-off m-r-5 m-l-5"></i> Logout</a>
                                        <div className="dropdown-divider"></div>
                                        <div className="p-l-30 p-10"><a className="btn btn-sm btn-success btn-rounded">View Profile</a></div>
                                    </div> */}
                                </li>

                            </ul>
                        </div>
                    </nav>
                </header>
            </div>

        );
    }
}