import "./SignUpBox.css"
import Button from "../../../atoms/Button/Button";


const SignUpBox = () => {

    const signUpBox = (
        <div className="wrapper">
            <div className="input-wrapper">
                <label>Username</label>
                <input className="input" />
            </div>
            <div className="input-wrapper">
                <label>Password</label>
                <input  className="input" type="password"/>
            </div>
            <Button text={"Sign Up"} />
        </div>
    );

    return signUpBox;
}

export  default  SignUpBox;