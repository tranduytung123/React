import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import './style.css';

TaskItem.propTypes = {
    taskName: PropTypes.string,
    taskAuthor: PropTypes.string,
    taskDesscription: PropTypes.string,
    taskStatus : PropTypes.string,

};
    TaskItem.defaultProps = {
        taskName: "Task name",
        taskAuthor: "Author",
        taskStatus : "New",
     
    }
function TaskItem(props) {
    const {taskName,taskCreator,taskStatus,taskDesscription} =props;
    const [btnStatus, setBtnStatus] = useState("Start");
    const [status, setStatus] = useState(taskStatus);
    const [statusColor, setColor] = useState("#14ae5c");

    function changeStatus() {
        if (status === "New") {
            setStatus("Doing");
            setBtnStatus("Done");
            setColor("green");

        } else if (status === "Doing") {
            setStatus("Done");
            setBtnStatus("Renew");
            setColor("orange");

        } else if (status === "Done") {
            setStatus("New");
            setBtnStatus("Start");
            setColor("blue");

        }
    }
   
    return (
        <div className='card'>
            <p><strong>Title:  {taskName}</strong>  </p>
            <p>Creator:{taskCreator}</p>
            <b style={{ color: statusColor }} >Status: {status}</b>
            <p><strong> Desscription: </strong> {taskDesscription}</p>
            
            <button className="status-btn" onClick={changeStatus} >{btnStatus}</button>
            
            
        </div>
    );
}
export default TaskItem;