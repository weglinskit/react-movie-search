import React, { Component } from 'react';
import SearchJumbo from './components/SearchJumbo/index';
import MovieList from './components/MovieList/index';

class Home extends Component {

    constructor() {
        super();
        this.state = {
            results: [
                {
                    id: 1,
                    href: '/movie/1'
                },
                {
                    id: 2,
                    href: '/movie/2'
                }
            ]
        };
    }

    render() {
        return (
            <div>
                <SearchJumbo />
                <MovieList results={this.state.results} />
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
