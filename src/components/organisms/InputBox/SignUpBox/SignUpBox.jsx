import "./SignUpBox.css"
import Button from "../../../atoms/Button/Button";
import {useState, useEffect} from "react";


const SignUpBox = () => {
    const [active, setActive] = useState(true);

    return active ?
                (
                    <div className="wrapper">
                        <div className="input-wrapper">
                            <label>Username</label>
                            <input className="input" />
                        </div>
                        <div className="input-wrapper">
                            <label>E-mail Adress</label>
                            <input className="input" />
                        </div>
                        <Button text={"Next"} event={() => setActive(!active)} />
                    </div>
                )
                :
                (
                    <div className="wrapper">
                        <div className="input-wrapper">
                            <label>Password</label>
                            <input className="input" type="password"/>
                        </div>
                        <div className="input-wrapper">
                            <label>Repeat Password</label>
                            <input  className="input" type="password"/>
                        </div>
                        <div className="btn-wrapper">
                            <Button text={"Back"} event={() => setActive(!active)}  />
                            <Button text={"Sign Up"} />
                        </div>
                    </div>
                )
}

export  default  SignUpBox;