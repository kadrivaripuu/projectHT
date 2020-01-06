import React from 'react';



export default class DefaultContent extends React.Component {
    constructor(props) {
        super(props);
    }



    render() {
        return (

            <div className="page-breadcrumb">
                <div className="row">
                    <div className="col-12 d-flex no-block align-items-center">
                        <h4 className="page-title">(Default page)</h4>
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


        );
    }
}