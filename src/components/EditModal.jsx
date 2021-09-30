import Modal from 'react-modal';
import Tasks from './Tasks';


const EditModal = ({modalOpen, modalClose, task, setTask, list, addOrEdit}) => {

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

      const addList = () => {
        axios.put('https://recruitment.ultimate.systems/to-do-lists',{
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
          <input style={{width: '100%'}} placeholder="List name"></input>
          <hr></hr>
        <Tasks task={task} setTask={setTask} list={list}></Tasks>
        <div className="editAddButtons">
        <button className="cancel" onClick={modalClose}>CANCEL</button>
        <button style={{margin: 0}} onClick={addOrEdit}>SAVE</button>
        </div>
        </Modal>
      </div>
    )
}

export default EditModal