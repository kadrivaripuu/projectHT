import React from 'react';
import ReactModal from 'react-modal';


export default class DefaultContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        };

        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }
    handleOpenModal() {
        this.setState({ showModal: true });
    }

    handleCloseModal() {
        this.setState({ showModal: false });
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
                <div className="row">
                    <div className="card-body">
                        <button type="submit" className="btn btn-primary" onClick={this.handleOpenModal}>Trigger Modal</button>
                    </div>
                </div>
                <div className="ml-auto text-right">
                    <ReactModal
                        isOpen={this.state.showModal}
                        ariaHideApp={true}
                        style={
                            {
                                overlay: {
                                    position: 'fixed',
                                    top: 250,
                                    left: 250,
                                    right: 250,
                                    bottom: 250,
                                    backgroundColor: 'rgba(255, 255, 255, 0.75)'
                                },
                                content: {
                                    position: 'absolute',
                                    top: '40px',
                                    left: '40px',
                                    right: '40px',
                                    bottom: '40px',
                                    border: '1px solid #ccc',
                                    background: '#fff',
                                    overflow: 'auto',
                                    WebkitOverflowScrolling: 'touch',
                                    borderRadius: '4px',
                                    outline: 'none',
                                    padding: '20px'
                                }
                            }
                        }
                    >

                        <button onClick={this.handleCloseModal}>Close Modal</button>
                    </ReactModal>
                </div >
            </div>



        );
    }
}