import "./annotation.css"

const Annotation = ({text}) => {
    const annotation = (
        <div className="annotation">
            {text}
        </div>
    );

    return annotation;
}

export default Annotation;
