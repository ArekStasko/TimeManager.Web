import ButtonLink from "../../../atoms/ButtonLink/buttonLink"
function AuthButtons(){
    return(
        <div className="Buttons">
            <ButtonLink text={"Manager"} />
            <ButtonLink text={"Sign Out"} />
        </div>
    )
}

export default AuthButtons;