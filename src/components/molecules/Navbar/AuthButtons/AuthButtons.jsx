import Button from "../../../atoms/Button/button"
function AuthButtons(){
    return(
        <div className="Buttons">
            {Button("Manager")}
            {Button("Sign Out")}
        </div>
    )
}

export default AuthButtons;