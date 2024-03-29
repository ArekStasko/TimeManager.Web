import Navbar from "../components/Navbar"
import "../assets/styles/themes/default/pages/home.scss"
import {connect} from "react-redux";
import FlashMessage from "../components/Flash"
import React, {Suspense} from "react";

class Home extends React.Component {
    constructor() {
        super();
    }
    render()
    {
        return (
                <div className="home">
                    <div className="home__background"/>
                    <Navbar/>
                </div>
        );
    }
}
    const mapStateToProps = ({flash}) => ({
        flash
    });

export default connect(mapStateToProps)(Home);