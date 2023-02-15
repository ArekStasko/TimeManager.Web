import "./SignInBox.css"
import Button from "../../../atoms/Button/Button";


const SignInBox = () => {

    const signInBox = (
        <div className="wrapper">
            <div className="input-wrapper">
                <label>Username</label>
                <input className="input" />
            </div>
            <div className="input-wrapper">
                <label>Password</label>
                <input  className="input" type="password"/>
            </div>
            <Button text={"Sign In"} />
        </div>
    );

    return signInBox;
}

export  default  SignInBox;