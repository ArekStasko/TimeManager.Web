import React from "react"
import {connect} from "react-redux";
import FlashMessage from "../components/Flash";

function FlashLayout(props) {

    return(
        <>
            {props.flash ? (
                <FlashMessage errMessage={"Example Error Message"} duration={5000} />
            ) : null}
            {props.Component}
        </>
    )
}

const mapStateToProps = ({flash}) => ({
    flash,
});
export default  connect(mapStateToProps)(FlashLayout);