import React from 'react';
import { Route, Switch } from 'react-router-dom';

import ScrollSidebar from '../containers/ScrollSidebar.jsx';
import Topbar from '../containers/Topbar.jsx';
import LoginPage from '../containers/LoginPage.jsx';
import ContentForm from '../containers/ContentForm.jsx';
import DefaultContent from '../containers/DefaultContent.jsx';
import Dashboard from '../containers/Dashboard.jsx';
import AddProject from '../containers/AddProject.jsx';
import TableUsers from '../containers/TableUsers.jsx';
import Tables from '../containers/Tables.jsx';


const DefaultPage = (props) => {
    return (<DefaultContent />)
}

function MasterLayout() {
    return (
        <React.Fragment>
            <div id="main-wrapper">
                <Topbar />
                <ScrollSidebar />

                <div className="page-wrapper">
                    <div className="container-fluid">
                        <div className="card">
                            <Switch>
                                <Route exact path="/" component={DefaultPage} />
                                <Route path="/login" component={LoginPage} />
                                <Route path="/register" component={ContentForm} />
                                <Route path="/dashboard" component={Dashboard} />
                                <Route path="/addproject" component={AddProject} />
                                <Route path="/users" component={TableUsers} />
                                <Route path="/tables" component={Tables} />
                            </Switch>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="footer text-center">
                All Rights Reserved by Matrix-admin. Designed and Developed by <a href="https://wrappixel.com">WrapPixel</a>.
            </footer>
        </React.Fragment>

    );
}
export default MasterLayout;