import "../assets/styles/components/Navbar.css"
import {checkToken, signout} from "../actions";
import {connect} from "react-redux";
import React from 'react';
import ButtonLink from "./ButtonLink";
import Button from "./Button";
import Icon from "./Icon";
import Annotation from "./Annotation";

class Navbar extends React.Component  {

    constructor() {
        super();
    };

    componentDidMount() {
        this.props.checkToken();
    }

    signOutEvent(){
        this.props.signout();
        window.location.reload(false);
    }

    render() {
        return (
            <div className="Navbar">
                <div className="header">
                    <div className="main-wrapper">
                        <Icon style={"Icon tm-logo"} />
                        <Annotation text={"Why TimeManager ?"} />
                    </div>
                </div>
                {
                    this.props.access ?
                        (
                            <div className="Buttons">
                                <ButtonLink text={"Manager"} />
                                <Button text={"Sign Out"} event={() => this.signOutEvent()} />
                            </div>
                        )
                        :
                        (
                            <div className="Buttons">
                                <ButtonLink text={"Sign In"} link={"/SignIn"} style={"btn btn-small btn-transparent btn-magnifyEffect"} />
                                <ButtonLink text={"Sign Up"} link={"/SignUp"} style={"btn btn-big btn-transparent"} />
                            </div>
                        )
                }
            </div>
        )
    };

}

const mapStateToProps = ({flash, access, loading }) => ({
    flash,
    access,
    loading,
});

const mapDispatchToProps = (dispatch) => ({
    checkToken: () => dispatch(checkToken()),
    signout: () => dispatch(signout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);