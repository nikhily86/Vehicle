import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = (props) => {
    return (
        <>
        
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" exact to="#">
                        Welcome
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item ">
                                <NavLink className="nav-link" exact to={props.pre}><h4>{props.name}</h4> </NavLink>
                            </li>


                        </ul>

                    </div>

                </div>


                <div>

                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item ">
                            <NavLink className="nav-link" exact to={props.link}><h3>{props.namelink}</h3> </NavLink>
                        </li>


                    </ul>
                </div>

            </nav>
       
        </>
    )
}

export default Nav;
