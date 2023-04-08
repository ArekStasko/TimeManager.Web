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

    signOutEvent(e){
        e.preventDefault();
        this.props.signout();
    }

    render() {
        return (
            <div className="navbar">
                <div className="navbar__header">
                        <div className="navbar__header--icon" />
                        <Link href="#" underline="hover" color="white">Why TimeManager ?</Link>
                </div>
                {
                     this.props.access ?
                        (
                            <div className="navbar__buttons">
                                <Button sx={{ m: 2 }} variant="contained" size="large" href="/Manager">Manager</Button>
                                <Button sx={{ m: 2 }} variant="outlined" size="large" onClick={(e) => this.signOutEvent(e)}>Sign Out</Button>
                            </div>
                        )
                        :
                        (
                            <div className="navbar__buttons">
                                <Button sx={{ m: 2 }} variant="contained" size="large" href="/SignIn">Sign In</Button>
                                <Button sx={{ m: 2 }} variant="contained" size="large" href="/SignUp">Sign Up</Button>
                            </div>
                        )
                }
            </div>
        )
    };

}
//this.props.access
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