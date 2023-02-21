import NonAuthButtons from "../../molecules/Navbar/NonAuthButtons/NonAuthButtons";
import Header from "../../molecules/Navbar/Header/Header";
import "./navbar.css"
import AuthButtons from "../../molecules/Navbar/AuthButtons/AuthButtons";
import {checkToken} from "../../../actions";
import {connect} from "react-redux";
import React from 'react';

class Navbar extends React.Component  {

    constructor() {
        super();
    };

    componentDidMount() {
        this.props.checkToken();
    }

    render() {
        return (
            <div className="Navbar">
                <Header />
                {
                    this.props.access ? <AuthButtons /> :  <NonAuthButtons />
                }
            </div>
        )
    };

}

const mapStateToProps = ({flash, access }) => ({
    flash,
    access,
});

const mapDispatchToProps = (dispatch) => ({
    checkToken: () => dispatch(checkToken()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);