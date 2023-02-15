import "./Button.css"

const Button = ({text}) => {

    const button = (
        <div className="btn-wrapper">
            <button className="btn btn-event btn-transparent">{text}</button>
        </div>
    );

    return button;
};

export default  Button;