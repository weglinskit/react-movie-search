import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div>
                <div className="jumbotron">
                    <div className="container">
                        <form>
                            <div className="form-group">
                                <input type="text"
                                       className="form-control form-control-lg"
                                       id="search-input"
                                       placeholder="Search for movie..." />
                            </div>
                        </form>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-4">
                            <div className="card">
                                <img className="card-img-top" src="http://via.placeholder.com/350x150" alt="Card image cap" />
                                    <div className="card-body">
                                        <h4 className="card-title">Card title</h4>
                                        <p className="card-text">
                                            Some quick example text to build on the card
                                            title and make up the bulk of the card's content.
                                        </p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="card">
                                <img className="card-img-top" src="http://via.placeholder.com/350x150" alt="Card image cap" />
                                    <div className="card-body">
                                        <h4 className="card-title">Card title</h4>
                                        <p className="card-text">
                                            Some quick example text to build on the card
                                            title and make up the bulk of the card's content.
                                        </p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="card">
                                <img className="card-img-top" src="http://via.placeholder.com/350x150" alt="Card image cap" />
                                    <div className="card-body">
                                        <h4 className="card-title">Card title</h4>
                                        <p className="card-text">
                                            Some quick example text to build on the card
                                            title and make up the bulk of the card's content.
                                        </p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="card">
                                <img className="card-img-top" src="http://via.placeholder.com/350x150" alt="Card image cap" />
                                    <div className="card-body">
                                        <h4 className="card-title">Card title</h4>
                                        <p className="card-text">
                                            Some quick example text to build on the card
                                            title and make up the bulk of the card's content.
                                        </p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="card">
                                <img className="card-img-top" src="http://via.placeholder.com/350x150" alt="Card image cap" />
                                    <div className="card-body">
                                        <h4 className="card-title">Card title</h4>
                                        <p className="card-text">
                                            Some quick example text to build on the card
                                            title and make up the bulk of the card's content.
                                        </p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="card">
                                <img className="card-img-top" src="http://via.placeholder.com/350x150" alt="Card image cap" />
                                    <div className="card-body">
                                        <h4 className="card-title">Card title</h4>
                                        <p className="card-text">
                                            Some quick example text to build on the card
                                            title and make up the bulk of the card's content.
                                        </p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <nav aria-label="Page navigation example">
                                <ul className="pagination">
                                    <li className="page-item">
                                        <a className="page-link" href="#">Previous</a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="#">1</a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="#">2</a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="#">3</a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="#">Next</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
