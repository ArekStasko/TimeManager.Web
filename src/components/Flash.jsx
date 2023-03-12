import React, { useEffect } from "react";
import { connect } from 'react-redux'
import { resetFlash } from '../actions'
import '../assets/styles/components/Flash.css'
import {Alert, AlertTitle} from "@mui/material";
const FlashMessage = ({ errMessage, duration, resetFlash, flash }) => {


    useEffect(() => {
        setTimeout(() => {
            resetFlash()
        }, duration);
    }, [resetFlash, 100000]);

    const pick = () => {
        switch (flash.type) {
            case 'ERROR':
                return(
                    <Alert severity="error">
                        <AlertTitle>Error</AlertTitle>
                        {errMessage}
                    </Alert>
                )
            case 'SUCCESS':
                return(
                    <Alert severity="success">
                        <AlertTitle>Success</AlertTitle>
                        {errMessage}
                    </Alert>
                )
            default:
                return(
                    <Alert severity="warning">
                        <AlertTitle>Warning</AlertTitle>
                        {errMessage}
                    </Alert>
                )
        }
    }

    return (
        <div className="flash">
            {
                pick()
            }
        </div>
    );
};

const mapStateToProps = (flash) => ({flash})

const mapDispatchToProps = dispatch => ({
    resetFlash: () =>
        dispatch(resetFlash()),
})

export default connect(mapStateToProps, mapDispatchToProps)(FlashMessage);