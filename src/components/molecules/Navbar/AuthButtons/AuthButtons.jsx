import ButtonLink from "../../../atoms/ButtonLink/buttonLink"
import Button from "../../../atoms/Button/Button"
import {signout} from "../../../../actions";
import {connect} from "react-redux";
import React from "react";
class AuthButtons extends React.Component{
    constructor() {
        super();
    }

    signOutEvent(){
        this.props.signout();
        window.location.reload(false);
    }

    render(){
        return(
            <div className="Buttons">
                <ButtonLink text={"Manager"} />
                <Button text={"Sign Out"} event={() => this.signOutEvent()} />
            </div>
        )
    }
}
const mapStateToProps = ({flash, loading }) => ({
    flash,
    loading,
});

const mapDispatchToProps = (dispatch) => ({
    signout: () => dispatch(signout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthButtons);