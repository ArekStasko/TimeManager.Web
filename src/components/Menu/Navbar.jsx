import React, { useState } from 'react';
import { Button } from "@mui/material";
import {signout} from "../../actions";
import {connect} from "react-redux";


function MenuIcon() {
    return null;
}

function Navbar(props){

    function signOutEvent(e){
        e.preventDefault();
        props.signout();
    }

    return(
        <div className="m-navbar">
            <Button sx={{ m: 2 }} variant="outlined" size="large" onClick={(e) => signOutEvent(e)}>Sign Out</Button>
        </div>
    )
}


const mapDispatchToProps = (dispatch) => ({
    signout: () => dispatch(signout()),
});
export default connect(null, mapDispatchToProps)(Navbar);