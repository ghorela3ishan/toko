import React, { Component} from "react";
import { connect } from "react-redux";
import "./Header.scss";

export default class Header extends Component {
    render() {
        let { companyName } = this.props; 
        return(
            <header className="headerCont">
                <p className="companyName">{companyName}</p>
            </header>
        );
    }
}
