import "../assets/styles/pages/SignIn.css"
import "../assets/styles/components/Header.css"
import "../assets/styles/components/Buttons.css"
import Annotation from "../components/Annotation";
import {connect} from "react-redux";
import FlashMessage from "../components/Flash";
import React from "react";
import Button from "../components/Button";
import {Navigate} from "react-router-dom";
import {login} from "../actions";
import Icon from "../components/Icon";
import {CircularProgress} from "@mui/material";

class SignIn extends React.Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
            redirect: false
        };
    }

    HandleSubmit(e){
        e.preventDefault();
        this.props.login(this.state.username, this.state.password);
        this.setState({redirect: true});
    }

    render(){

        if(this.state.redirect && !this.props.loading){
            return <Navigate to="/" />
        }

        return(
            <>
                {this.props.flash ? (
                        <FlashMessage errMessage={"Pass correct values"} duration={5000} />
                ) : null}
                <div className="SignIn-background">
                    <div className="Wrapper">
                        <div className="Logo-wrapper">
                            <div className="header">
                                <div className="main-wrapper">
                                    <Icon style={"Icon tm-logo"} />
                                    <Annotation text={"Why TimeManager ?"} />
                                </div>
                            </div>
                        </div>
                        <div className="wrapper">
                            <div className="input-wrapper">
                                <label htmlFor="username">Username</label>
                                <input
                                    id="username"
                                    type="text"
                                    value={this.state.username}
                                    onChange={e => this.setState({username: e.target.value})}
                                    className="input"
                                />
                            </div>
                            <div className="input-wrapper">
                                <label>Password</label>
                                <input
                                    id="password"
                                    value={this.state.password}
                                    onChange={e => this.setState({password: e.target.value})}
                                    className="input"
                                    type="password"
                                />
                            </div>
                            {
                                this.props.loading ? (
                                    <>
                                        <CircularProgress />
                                    </>
                                ) : (
                                    <>
                                        <Button text={"Sign In"} event={e => this.HandleSubmit(e)} />
                                    </>
                                )
                            }
                        </div>
                        <div className="info">
                            <Annotation text="Forgot Password ?" link={"forgotPassword"} />
                            <Annotation text="Don't have an account ?" link={"SignUp"} />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

const mapStateToProps = ({flash, loading }) => ({
    flash,
    loading,
});

const mapDispatchToProps = (dispatch) => ({
    login: (username, password) => dispatch(login(username, password)),
});

export default  connect(mapStateToProps, mapDispatchToProps)(SignIn);