import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
    render(){
        return(
            <div>
                <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <a className="navbar-brand"><i className="fa fa-newspaper-o fa-3x" aria-hidden="true"></i></a>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link"><Link to={'/'}>Home</Link><span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link"><Link to={'/entertainment'}>Entertainment</Link></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link"><Link to={'/tech'}>Tech</Link></a>
                            </li>
                        </ul>
                    <span className="navbar-text">Fake News</span>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Nav