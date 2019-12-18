import React from 'react';

/**stateful component */
export default class MainNavBar extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="navbar main">
                <a href="index.html?lang=en" className="appbrand"><span>Admin+ <span>lovely headline here</span></span></a>

                <button type="button" className="btn btn-navbar">
                    <span className="icon-bar"></span> <span className="icon-bar"></span> <span className="icon-bar"></span>
                </button>

                <ul className="topnav pull-right">
                    <li className="visible-desktop">
                        <ul className="notif">
                            <li><a className="glyphicons envelope" data-toggle="tooltip" data-placement="bottom" data-original-title="5 new messages"><i></i> 5</a></li>
                            <li><a className="glyphicons shopping_cart" data-toggle="tooltip" data-placement="bottom" data-original-title="1 new orders"><i></i> 1</a></li>
                            <li><a className="glyphicons log_book" data-toggle="tooltip" data-placement="bottom" data-original-title="3 new activities"><i></i> 3</a></li>
                        </ul>
                    </li>
                    <li className="dropdown visible-desktop">
                        <a data-toggle="dropdown" className="glyphicons cogwheel"><i></i>Dropdown <span className="caret"></span></a>
                        <ul className="dropdown-menu pull-right">
                            <li><a>Some option</a></li>
                            <li><a>Some other option</a></li>
                            <li><a>Other option</a></li>
                        </ul>
                    </li>
                    <li className="account">
                        <a data-toggle="dropdown" href="form_demo.html?lang=en" className="glyphicons logout lock">
                            <span className="hidden-phone text">mosaicpro</span><i></i>
                        </a>

                        <ul className="dropdown-menu pull-right">
                            <li><a href="form_demo.html?lang=en" className="glyphicons cogwheel">Settings<i></i></a></li>
                            <li>
                                <span>
                                    <a className="btn btn-default btn-small pull-right" style={{ padding: "2px 10px", background: "#fff", href: "login.html?lang=en" }}>Sign Out</a>
                                </span>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>


        )
    }
}