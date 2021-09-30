import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquare, faCheckSquare } from '@fortawesome/free-regular-svg-icons';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Task = ({task, setTask}) => {

    return (
        <>
            { task ? <FontAwesomeIcon  onClick = {() => setTask(false)}  style ={{color: 'green'}} icon = {faCheckSquare} /> : <FontAwesomeIcon onClick = {() => setTask(true)} icon={faSquare} />}<input className="inputTask" placeholder="task..."></input>
        </>
    )
}

export default Task