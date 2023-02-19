import React from "react"
import {connect} from "react-redux";
import "./SignInBox.css"
import Button from "../../../atoms/Button/Button";
import {login} from "../../../../actions";
import LoadingPage from "../../../atoms/Loading/Loading";


class SignInBox extends React.Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: ""
        };
    };

    HandleSubmit(e){
        e.preventDefault();
        this.props.login(this.state.username, this.state.password);
    }

    render(){
        return (
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
                            <LoadingPage />
                        </>
                    ) : (
                        <>
                            <Button text={"Sign In"} event={e => this.HandleSubmit(e)} />
                        </>
                    )
                }
            </div>
        );
    }
}

const mapStateToProps = ({flash, loading }) => ({
    flash,
    loading,
});

const mapDispatchToProps = (dispatch) => ({
    login: (username, password) => dispatch(login(username, password)),
});

export  default  connect(mapStateToProps, mapDispatchToProps)(SignInBox);