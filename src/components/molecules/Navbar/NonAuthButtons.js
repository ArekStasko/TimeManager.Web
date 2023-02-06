import Button from "../../atoms/button"
function NonAuthButtons(){
    return(
        <div className="Buttons">
            {Button("Sign In")}
            {Button("Sign Up")}
        </div>
    )
}

export default NonAuthButtons;