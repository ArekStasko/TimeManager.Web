import React from "react";
import {connect} from "react-redux"
import "./SignUpBox.css"
import Button from "../../../atoms/Button/Button";
import {register} from "../../../../actions";
import {FaArrowRight, FaArrowLeft} from "react-icons/fa"
import LoadingPage from "../../../atoms/Loading/Loading";
import { Navigate } from "react-router-dom";

class SignUpBox extends React.Component {
    constructor() {
        super();
        this.state = {
            active: true,
            username: "",
            password: "",
            repeatPassword: "",
            redirect: false
        }
    };

    HandleSubmit = e => {
        e.preventDefault();
        this.props.register(this.state.username, this.state.password);
        this.setState({redirect: true});
    }

    render() {

        if(this.state.redirect && !this.props.loading){
            return <Navigate to="/" />
        }

        return this.state.active ?
            (
                <div className="wrapper">
                    <div className="input-wrapper">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            value={this.state.username}
                            onChange={e => this.setState({username: e.target.value})}
                            className="input"
                        />
                    </div>
                    <div className="input-wrapper">
                        <label>E-mail Adress</label>
                        <input className="input"/>
                    </div>
                    <Button text={<FaArrowRight/>} event={() =>this.setState({active: !this.state.active})}/>
                </div>
            )
            :
            (
                <div className="wrapper">
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input
                            id="password"
                            value={this.state.password}
                            onChange={e => this.setState({password: e.target.value})}
                            className="input"
                            type="password"
                        />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="repeatPassword" >Repeat Password</label>
                        <input
                            id="repeatPassword"
                            value={this.state.repeatPassword}
                            onChange={e => this.setState({repeatPassword: e.target.value})}
                            className="input"
                            type="password"
                        />
                    </div>
                    <div className="btn-wrapper">
                        {
                            this.props.loading ? (
                                <>
                                    <LoadingPage />
                                </>
                            ) : (
                                <>
                                    <Button text={<FaArrowLeft/>} event={() => this.setState({active: !this.state.active})}/>
                                    <Button text={"Sign Up"} event={e => this.HandleSubmit(e)}/>
                                </>
                            )
                        }
                    </div>
                </div>
            )
    }
}

const mapStateToProps = ({flash, loading }) => ({
    flash,
    loading,
});

const mapDispatchToProps = (dispatch) => ({
    register: (username, password) => dispatch(register(username, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpBox);