import './button.css'

function Button(text, style){
    return(
      <div className={style}>
          <div className="Text">{text}</div>
      </div>
    );
}

export default Button;