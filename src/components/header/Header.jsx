import React, { Component} from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

export default class Header extends Component {
    render() {
        let { companyName } = this.props; 
        return(
            <header className="headerCont">
                <Link to="" className="linkCont"><p className="companyName">{companyName}</p></Link>
            </header>
        );
    }
}
