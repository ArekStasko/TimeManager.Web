import "../assets/styles/pages/SignUp.css"
import Annotation from "../components/Annotation";
import { connect } from "react-redux";
import React from 'react';
import FlashMessage from "../components/Flash";
import {Button, CircularProgress, TextField} from "@mui/material";
import Icon from "../components/Icon";
import {register} from "../actions";
import {Navigate} from "react-router-dom";
class SignUp extends React.Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
            repeatPassword: "",
            redirect: false
        }
    }

    HandleSubmit = e => {
        e.preventDefault();
        this.props.register(this.state.username, this.state.password);
        this.setState({redirect: true});
    }

    render(){

        if(this.state.redirect && !this.props.loading){
            return <Navigate to="/" />
        }

        return (
            <>
                {this.props.flash ? (
                        <FlashMessage errMessage={"Pass correct values"} duration={5000} />
                ) : null}
            <div className="SignUp-background">
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
                            <TextField
                                value={this.state.username}
                                onChange={e => this.setState({username: e.target.value})}
                                variant="filled"
                                id="outlined-basic"
                                label="Username"
                            />
                        </div>
                        <div className="input-wrapper">
                            <TextField
                                value={this.state.password}
                                onChange={e => this.setState({password: e.target.value})}
                                variant="filled"
                                id="outlined-basic"
                                label="Password"
                                type="password"
                            />
                        </div>
                        <div className="input-wrapper">
                            <TextField
                                value={this.state.repeatPassword}
                                onChange={e => this.setState({repeatPassword: e.target.value})}
                                variant="filled"
                                id="outlined-basic"
                                label="Repeat Password"
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
                                    <Button onClick={e => this.HandleSubmit(e)} variant="outlined" size="large" >Sign Up</Button>
                                </>
                            )
                        }
                    </div>
                    <div className="info">
                        <Annotation text="Already have an account ?" link={"SignIn"} />
                    </div>
                </div>
            </div>
            </>
        );
    }

}

const mapStateToProps = ({flash, loading}) => ({
    flash,
    loading,
});

const mapDispatchToProps = (dispatch) => ({
    register: (username, password) => dispatch(register(username, password)),
});

export default  connect(mapStateToProps, mapDispatchToProps)(SignUp);