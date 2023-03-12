import "../assets/styles/components/Icon.css"
const Icon = ({style}) => {
    const icon = (
        <div className="Icon">
            <div className={style}></div>
        </div>
    )

    return icon;
}

export default Icon;