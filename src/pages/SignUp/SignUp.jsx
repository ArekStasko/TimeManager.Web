import "./SignUp.css"
import Header from "../../components/molecules/Navbar/Header/Header";
import Annotation from "../../components/atoms/Annotation/Annotation";
import SignUpBox from "../../components/organisms/InputBox/SignUpBox/SignUpBox";
import { connect } from "react-redux";
import React from 'react';
import FlashMessage from "../../flash/flash";
class SignUp extends React.Component {
    constructor() {
        super();
    }

    render(){
        return (
            <>
                {this.props.flash ? (
                        <FlashMessage errMessage={"Pass correct values"} duration={5000} />
                ) : null}
            <div className="SignUp-background">
                <div className="Wrapper">
                    <div className="Logo-wrapper">
                        <Header />
                    </div>
                    <SignUpBox />
                    <div className="info">
                        <Annotation text="Already have an account ?" link={"SignIn"} />
                    </div>
                </div>
            </div>
            </>
        );
    }

}

const mapStateToProps = ({flash}) => ({
    flash
});

export default  connect(mapStateToProps)(SignUp);