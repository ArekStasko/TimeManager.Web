import '../../styles/button.css'

function Button(text){
    return(
      <div className="Button">
          <div className="Text">{text}</div>
      </div>
    );
}

export default Button;