import Button from "../../atoms/button"
function AuthButtons(){
    return(
        <div className="Buttons">
            {Button("Manager")}
            {Button("Sign Out")}
        </div>
    )
}

export default AuthButtons;