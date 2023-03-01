import React, { useEffect } from "react";
import { connect } from 'react-redux'
import { resetFlash } from '../actions/index'
import './flash.css'
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
                    <div className='flash-error'>
                        <p>{errMessage}</p>
                    </div>
                )
            case 'SUCCESS':
                return(
                    <div className='flash-success'>
                        <p>{flash.message}</p>
                    </div>
                )
            default:
                return(
                    <div className='flash-unknown'>
                        <h1>Unknown error</h1>
                    </div>
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