import React from "react"
import {connect} from "react-redux";
import FlashMessage from "../components/Flash";

function FlashLayout(props) {

    return(
        <>
            {props.flash ? (
                <FlashMessage errMessage={props.flash.message} duration={5000} />
            ) : null}
            {props.Component}
        </>
    )
}

const mapStateToProps = ({flash}) => ({
    flash,
});
export default  connect(mapStateToProps)(FlashLayout);