import "./SignUp.css"
import Header from "../../components/molecules/Navbar/Header/Header";
import Annotation from "../../components/atoms/Annotation/Annotation";
import SignUpBox from "../../components/organisms/InputBox/SignUpBox/SignUpBox";

const SignUp = () => {

    const signUp = (
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
    );

    return signUp;
}

export default  SignUp;