import "./SignIn.css"
import SignInBox from "../../components/organisms/InputBox/SignInBox";
import Annotation from "../../components/atoms/Annotation/Annotation";
import Icon from "../../components/atoms/Icon/Icon";
import Header from "../../components/molecules/Navbar/Header/Header";

const SignIn = () => {

    const signIn = (
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
    );

    return signIn;
}

export default  SignIn;