import React from 'react';
import PropTypes from 'prop-types';
import TaskItem from '../TaskItem/taskItem'
import './style.css'
TaskList.propTypes = {
    
};

function TaskList() {
    return (
        <div className='task-wrap'>
            <TaskItem  taskName="task 1" taskCreator="Tung" taskDesscription="This is a task, This is a task, This is a task."/>
            <TaskItem  taskName="task 2" taskCreator="Tu" taskDesscription="This is a task, This is a task, This is a task."/>
            <TaskItem  taskName="task 3" taskCreator="Ti" taskDesscription="This is a task, This is a task, This is a task."/>
            <TaskItem  taskName="task 4" taskCreator="Ta" taskDesscription="This is a task, This is a task, This is a task."/>
        </div>
    );
}

export default TaskList;