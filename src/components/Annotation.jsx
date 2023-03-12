import "../assets/styles/components/Annotation.css"
import {Link} from "react-router-dom";

const Annotation = ({text, link}) => {
    const annotation = (
        <div className="annotation">
            <Link className="annotation-link" to={"/" + link}>
                {text}
            </Link>
        </div>
    );

    return annotation;
}

export default Annotation;
