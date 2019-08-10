import React, { Component } from 'react';
import './style.css';

class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="bg-dark">
                    <ul className="nav justify-content-center">
                        <li className="nav-item">
                            <a className="nav-link" href="index.html">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled disable" href="index.html">Terms</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled disable" href="index.html">Contact Us</a>
                        </li>
                    </ul>
                    <div className="footer-copyright text-center">
                        <div className="copyright">© 2018 Copyright: Leo Cai</div>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Footer;