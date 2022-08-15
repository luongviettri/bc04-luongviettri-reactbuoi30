import React, { Component } from 'react'
import "./BaiTapThucHanhLayoutComponent.css"
export default class Header extends Component {
    render() {
        return (
            <div className="container-fluid bg-dark">
                <div className='container'>
                    <nav className="navbar navbar-expand-lg navbar-dark  justify-content-between ">
                        <a className="navbar-brand " href="#">Start Bootstrap
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent"
                            style={{
                                flexGrow: "0"
                            }}
                        >
                            <ul className="navbar-nav ">
                                <li className="nav-item active">
                                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Service</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Contact</a>
                                </li>

                            </ul>

                        </div>
                    </nav>

                </div>
            </div>
        )
    }
}
