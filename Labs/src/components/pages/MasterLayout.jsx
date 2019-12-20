import React from 'react';
import ScrollSidebar from '../containers/ScrollSidebar.jsx';
import Topbar from '../containers/Topbar.jsx';
import ContentForm from '../containers/ContentForm.jsx';


export default class MasterLayout extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div id="main-wrapper">
                <Topbar />
                <ScrollSidebar />
                <div className="page-wrapper">
                    <div className="page-breadcrumb">
                        <div className="row">
                            <div className="col-12 d-flex no-block align-items-center">
                                <h4 className="page-title">Form Basic</h4>
                                <div className="ml-auto text-right">
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item">Home</li>
                                            <li className="breadcrumb-item active" aria-current="page">Library</li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid">
                    <ContentForm />
                    </div>
                </div>



            </div>

        );
    }
}