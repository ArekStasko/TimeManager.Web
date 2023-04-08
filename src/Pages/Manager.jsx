import BarChart from "../components/Charts";
import {getTasks} from "../actions";
import {connect} from "react-redux";
import {CircularProgress} from "@mui/material";
import React, {useEffect} from "react";


const Manager = (props) => {

    useEffect(()=>{
        console.log("MANAGER")
        props.getTasks();
    }, [])

    return(
        <div className="manager">
            {
                props.loading ? (
                        <>
                            <CircularProgress />
                        </>
                ) : (
                    <>
                    </>
                )
            }
        </div>
    )
}

const mapStateToProps = ({loading, tasks }) => ({
    loading,
    tasks
});

const mapDispatchToProps = (dispatch) => ({
    getTasks: () => dispatch(getTasks()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Manager);