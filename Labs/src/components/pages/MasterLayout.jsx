import React from 'react';
import MainNavbar from '../containers/MainNavbar.jsx';
import Footer from '../containers/Footer.jsx';
import LeftMenu from '../containers/LeftMenu.jsx';
import Content from '../containers/Content.jsx';

export default class MasterLayout extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            // <button>{this.props.btnLabel} </button>	
            <div className="container-fluid fixed" >
                <MainNavbar />


                <div id="wrapper">
                    <LeftMenu />
                    <Content />
                </div>
                <Footer />
                
            </div>
            // footer should have been outside container-fluid fixed, but render can have only one master div?

        );
    }
}