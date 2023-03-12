import '../assets/styles/components/ButtonLink.css'
import {Link} from "react-router-dom";

function ButtonLink({text, link, style}){
    return(
        <Link to={link} className={style}>
          <div className="Text">{text}</div>
        </Link>
    );
}

export default ButtonLink;