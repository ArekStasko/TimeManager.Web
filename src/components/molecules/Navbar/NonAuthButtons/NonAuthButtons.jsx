import ButtonLink from "../../../atoms/ButtonLink/buttonLink"
import "./buttons.css"
function NonAuthButtons(){
    return(
        <div className="Buttons">
                <ButtonLink text={"Sign In"} link={"/SignIn"} style={"btn btn-small btn-transparent btn-magnifyEffect"} />
                <ButtonLink text={"Sign Up"} link={"/SignUp"} style={"btn btn-big btn-transparent"} />
        </div>
    )
}

export default NonAuthButtons;