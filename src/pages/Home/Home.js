import Navbar from "../../components/organisms/Navbar/navbar"
import "./home.css"
import {connect} from "react-redux";
import FlashMessage from "../../flash/flash";
import React from "react";

class Home extends React.Component {
    constructor() {
        super();
    }
    render()
    {
        return (
            <>
                {this.props.flash ? (
                    <FlashMessage errMessage={"Pass correct values"} duration={5000}/>
                ) : null}
                <div className="Home">
                    <div className="Background"/>
                    <Navbar/>
                </div>
            </>
        );
    }
}
    const mapStateToProps = ({flash}) => ({
        flash
    });

export default connect(mapStateToProps)(Home);