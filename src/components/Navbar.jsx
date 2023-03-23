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
            <div className="navbar">
                <div className="navbar__header">
                        <div/>
                        <Link href="#" underline="hover" color="white">Why TimeManager ?</Link>
                </div>
                {
                    this.props.access ?
                        (
                            <div className="navbar__buttons">
                                <Button variant="contained" size="large">Manager</Button>
                                <Button variant="outlined" size="large" OnClick={() => this.signOutEvent()}>Sign Out</Button>
                            </div>
                        )
                        :
                        (
                            <div className="navbar__buttons">
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