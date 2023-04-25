import React from "react";
import {FormStepper} from "../components/FormStepper";

class TaskForm extends React.Component{


    render(){

        return(
            <div className="taskForm">
                <div className="taskForm__wrapper">
                    <FormStepper />
                </div>
            </div>
        )
    }
}

export default TaskForm;