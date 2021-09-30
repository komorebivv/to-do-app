import Modal from 'react-modal';
import Task from './Task';
import Tasks from './Tasks';
import { useState } from 'react';
import axios from 'axios';

const AddModal = ({modalOpen, modalClose, list, addOrEdit, addTaskFunction, tasks}) => {
    const [newTask, setNewTask] = useState('')
    const [nameList, setNameList] = useState('')
    const [task, setTask] = useState(false)



    const customStyles = {
      overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backdropFilter: "blur(3px)",
      backgroundColor:'rgba(0,0,30,0.4)'
    },
        content: {
            position: 'absolute',
            top: '30px',
            left: '420px',
            right: '420px',
            bottom: '30px',
            background: '#2D2D2D',
            overflow: 'auto',
            outline: 'none',
            padding: '20px',
            border: 'none',

        },
      };

      const nameValueOnChange = (e) =>{
        e.persist();
        setNameList(e.target.value);
    }

      const addList = () => {
        axios.post('https://recruitment.ultimate.systems/to-do-lists',{
          name: nameList,
          task: tasks,
        } )
      }


    return (
        <div>
        <button onClick={modalOpen}>Open Modal</button>
        <Modal
          style={customStyles}
          isOpen={modalOpen}
          onRequestClose={modalClose}
          contentLabel="Example Modal"
        >
          <input style={{width: '100%'}} value={nameList} onChange={nameValueOnChange} placeholder="List name"></input>
          <hr></hr>
        <Tasks task={task} setTask={setTask} list={list} newTask={newTask} setNewTask={setNewTask}></Tasks>
        <div className="tasksButtons">
        <button>CANCEL</button>
        <button onClick={addTaskFunction}>ADD</button>
        </div>
        <div className="editAddButtons">
        <button className="cancel" onClick={modalClose}>CANCEL</button>
        <button style={{margin: 0}} onClick={addOrEdit}>SAVE</button>
        </div>
        </Modal>
      </div>
    )
}

export default AddModal