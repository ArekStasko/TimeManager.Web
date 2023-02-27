import ButtonLink from "../../../atoms/ButtonLink/buttonLink"
import Button from "../../../atoms/Button/Button"
import {signout} from "../../../../actions";
import {connect} from "react-redux";
import React from "react";
class AuthButtons extends React.Component{
    constructor() {
        super();
    }
    render(){
        return(
            <div className="Buttons">
                <ButtonLink text={"Manager"} />
                <Button text={"Sign Out"} event={() => this.props.signout()} />
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