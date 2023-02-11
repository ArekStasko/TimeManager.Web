import './buttonLink.css'
import {Link} from "react-router-dom";

function ButtonLink({text, style}){
    return(
        <Link to="/SignIn" className={style}>
          <div className="Text">{text}</div>
        </Link>
    );
}

export default ButtonLink;