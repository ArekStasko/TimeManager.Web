import "../assets/styles/components/Navbar.css"
import "../assets/styles/components/Icon.css"
import {checkToken, signout} from "../actions";
import {connect} from "react-redux";
import React from 'react';
import {Button, Link} from "@mui/material";

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
                        <div className="Icon">
                            <div className="Icon tm-logo"></div>
                        </div>
                        <Link href="#" underline="hover" color="white">Why TimeManager ?</Link>
                    </div>
                </div>
                {
                    this.props.access ?
                        (
                            <div className="Buttons">
                                <Button variant="contained" size="large">Manager</Button>
                                <Button variant="outlined" size="large" OnClick={() => this.signOutEvent()}>Sign Out</Button>
                            </div>
                        )
                        :
                        (
                            <div className="Buttons">
                                <Button variant="contained" size="large" href="/SignIn">Sign In</Button>
                                <Button variant="contained" size="large" href="/SignUp">Sign Up</Button>
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