import React from 'react';



export default class ContentForm extends React.Component {
    constructor(props) {
        super(props);
    };




    render() {
        return (
            <div className="card-body">
                <div className="card ">
                    <h4 className="card-title">Add Project:</h4>
                    <div className="form-group row">
                        <label htmlFor="ptitle" className="col-sm-4 text-right control-label col-form-label">Project Title</label>
                        <div className="col-sm-8">
                            <input type="text" className="form-control" id="ptitle" placeholder="Project Title Here..." />
                        </div >
                    </div>


                </div>
            </div>

        );
    }
}