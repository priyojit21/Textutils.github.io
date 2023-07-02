import React from 'react'
import PropTypes from 'prop-types'
// import { a } from 'react-router-dom'

export default function Navbar(props) {
    return (
        <div>
            {/* template literal er under a props pathale $ diye likhte hobe */}
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">{props.title}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-a active homie" aria-current="page" href="#">Home</a>
                            </li>
                            {/* <li className="nav-item">
                                <a className="nav-a" to="/about">{props.my}</a>
                            </li> */}
                        </ul>
                        <div className={`form-check form-switch text-${props.color}`}>
                            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.btnText}</label>
                        </div>
                        {/* <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form> */}
                    </div>
                </div>
            </nav>
        </div>
    )
}

// this is an object tells that the props we pass is of what datatype
Navbar.propTypes = {
    title: PropTypes.string,
    my: PropTypes.string
}
