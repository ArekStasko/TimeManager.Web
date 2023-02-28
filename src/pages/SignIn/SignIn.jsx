import "./SignIn.css"
import SignInBox from "../../components/organisms/InputBox/SignInBox/SignInBox";
import Annotation from "../../components/atoms/Annotation/Annotation";
import Header from "../../components/molecules/Navbar/Header/Header";
import {connect} from "react-redux";
import FlashMessage from "../../flash/flash";
import React from "react";

class SignIn extends React.Component {
    constructor() {
        super();
    }
    render(){
        return(
            <>
                {this.props.flash ? (
                    <div className="flash-register">
                        <FlashMessage errMessage={"Pass correct values"} duration={5000} />
                    </div>
                ) : null}
                <div className="SignIn-background">
                    <div className="Wrapper">
                        <div className="Logo-wrapper">
                            <Header />
                        </div>
                        <SignInBox />
                        <div className="info">
                            <Annotation text="Forgot Password ?" link={"forgotPassword"} />
                            <Annotation text="Don't have an account ?" link={"SignUp"} />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

const mapStateToProps = ({flash}) => ({
    flash
});

export default  connect(mapStateToProps)(SignIn);