import "../assets/styles/themes/default/pages/sign-up.scss"
import { connect } from "react-redux";
import React from 'react';
import FlashMessage from "../components/Flash";
import {Button, CircularProgress, Link, TextField} from "@mui/material";
import {register} from "../actions";
import {Navigate} from "react-router-dom";
class SignUp extends React.Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
            repeatPassword: "",
        }
    }

    HandleSubmit = e => {
        e.preventDefault();
        this.props.register(this.state.username, this.state.password);
    }

    render(){

        if(this.props.redirect && !this.props.loading){
            return <Navigate to="/" />
        }

        return (
            <div className="signup">
                <div className="signup__wrapper">
                    <div className="signup__wrapper--logo">
                                <div/>
                                <Link href="#" underline="hover" color="white">Why TimeManager ?</Link>
                    </div>
                    <div className="signup__form">
                        <div className="signup__form--input">
                            <TextField
                                value={this.state.username}
                                onChange={e => this.setState({username: e.target.value})}
                                variant="outlined"
                                id="outlined-basic"
                                label="Username"
                            />
                        </div>
                        <div className="signup__form--input">
                            <TextField
                                value={this.state.password}
                                onChange={e => this.setState({password: e.target.value})}
                                variant="outlined"
                                id="outlined-basic"
                                label="Password"
                                type="password"
                            />
                        </div>
                        <div className="signup__form--input">
                            <TextField
                                value={this.state.repeatPassword}
                                onChange={e => this.setState({repeatPassword: e.target.value})}
                                variant="outlined"
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
                    <div className="signup__info">
                        <Link href="SignIn" underline="hover" color="white">Already have an account ?</Link>
                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = ({flash, loading, redirect}) => ({
    flash,
    loading,
    redirect
});

const mapDispatchToProps = (dispatch) => ({
    register: (username, password) => dispatch(register(username, password)),
});

export default  connect(mapStateToProps, mapDispatchToProps)(SignUp);