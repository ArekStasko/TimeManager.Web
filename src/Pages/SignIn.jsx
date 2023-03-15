import {connect} from "react-redux";
import FlashMessage from "../components/Flash";
import React from "react";
import {Navigate} from "react-router-dom";
import {login} from "../actions";
import {Button, CircularProgress, Link, TextField} from "@mui/material";

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
                                    <div className="Icon">
                                        <div className="Icon tm-logo"></div>
                                    </div>
                                    <Link href="#" underline="hover" color="white">Why TimeManager ?</Link>
                                </div>
                            </div>
                        </div>
                        <div className="wrapper">
                            <div className="input-wrapper">
                                <TextField
                                    value={this.state.username}
                                    onChange={e => this.setState({username: e.target.value})}
                                    variant="outlined"
                                    margin="dense"
                                    id="outlined-basic"
                                    label="Username"
                                />
                            </div>
                            <div className="input-wrapper">
                                <TextField
                                    value={this.state.password}
                                    onChange={e => this.setState({password: e.target.value})}
                                    variant="outlined"
                                    id="outlined-basic"
                                    label="Password"
                                    margin="dense"
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
                                        <Button variant="outlined" size="large" onClick={e => this.HandleSubmit(e)}>Sign In</Button>
                                    </>
                                )
                            }
                        </div>
                        <div className="info">
                            <Link href="forgotPassword" underline="hover" color="white">Forgot Password ?</Link>
                            <Link href="SignUp" underline="hover" color="white">Don't have an account ?</Link>
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