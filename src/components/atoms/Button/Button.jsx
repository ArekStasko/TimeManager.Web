import "./Button.css"

const Button = ({text, event}) => {

    const button = (
        <div className="btn-wrapper">
            <button onClick={event} className="btn btn-event btn-transparent">{text}</button>
        </div>
    );

    return button;
};

export default  Button;