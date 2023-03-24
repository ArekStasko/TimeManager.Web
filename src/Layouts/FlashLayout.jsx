import React from "react"
import {connect} from "react-redux";
import FlashMessage from "../components/Flash";

const FlashLayout = ({Component}) => {

    return(
        <>
            {this.props.flash ? (
                <FlashMessage errMessage={"Example Error Message"} duration={5000} />
            ) : null}
            <Component />
        </>
    )
}

const mapStateToProps = ({flash, loading, redirect}) => ({
    flash,
});
export default  connect(mapStateToProps)(FlashLayout);