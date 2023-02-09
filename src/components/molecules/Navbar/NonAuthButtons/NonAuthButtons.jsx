import Button from "../../../atoms/Button/button"
import "./buttons.css"
function NonAuthButtons(){
    return(
        <div className="Buttons">
            {Button("Sign In", "btn btn-small btn-transparent btn-magnifyEffect")}
            {Button("Sign Up", "btn btn-big btn-transparent")}
        </div>
    )
}

export default NonAuthButtons;