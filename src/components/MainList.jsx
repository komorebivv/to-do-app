import List from "./List";
import { useState, useEffect } from "react";
import AddModal from "./AddModal";
import axios from "axios";
import EditModal from "./EditModal";
import Task from "./Task";

const MainList = () => {

    const [addModal, setAddModal] = useState(false);
    const [editModal, setEditModal] = useState(false);
    const [lists, setList] = useState([])
    const [toFilterLists, setToFilterLists] = useState([])
    const [inputValue, setInputValue] = useState('');
    const [sortDirectionLists, setSortDirectionLists] = useState(undefined)
    const [tasks, setTasks] = useState([])


    useEffect(()=> {
     axios.get('https://cors-anywhere.herokuapp.com/recruitment.ultimate.systems/to-do-list').then(({data}) => setToFilterLists(data) && setList(data).catch((error)=> console.log(error)))
    }, [])


    const inputValueOnChange = (e) =>{
        setInputValue(e.target.value);
    }

    
    useEffect(() => {
        const filteredList = toFilterLists.filter((list) => list.name.toLowerCase().includes(inputValue.toLowerCase()) )
        setList(filteredList);
      }, [inputValue]);


    function openAddModal() {
        setAddModal(true);
      }

      function closeAddModal() {
        setAddModal(false);
      }

      function openEditModal() {
        setEditModal(true);
      }

      function closeEditModal() {
        setEditModal(false);
      }



      const sortLists = () => {
        if (sortDirectionLists === undefined || sortDirectionLists === 'desc') {
          setSortDirectionLists('asc')
        } else {
          setSortDirectionLists('desc');
        }
        const sortListsByTitle = (sortDirectionLists) => {
          const direction = sortDirectionLists === 'asc' ? 1 : -1;
          return (a, b) => {
            if (a['name'] > b['name']) {
              return 1 * direction;
            }
            if (a['name'] < b['name']) {
              return -1 * direction;
            }
            return 0;
          };
        };
        const sortedList = lists.sort(sortListsByTitle(sortDirectionLists))
        setList(sortedList);

      };

 

      const addTaskFunction =() => {
        return setTasks(tasks.push(<Task></Task>))
      }

  
    return (
      
        <div className="container">
          { Array.isArray(lists)}
        <div className="lists">
        <div className="filterSort">
        <input className="filter" placeholder="Search" value={inputValue} onChange={inputValueOnChange}></input>
        <button className="sort" onClick={sortLists}>Sort by</button></div>
            <ul>
            {console.log(Array.isArray(lists))}

            {lists.map((list) => {let {name, task} = list; setTasks(tasks.push(task)); return <List edit={openEditModal} titleOfList={name} dateOfCreate="2019-08-21" uncomplatedTasks={task.filter((task, i) => { return !task.isDone}).length} complatedTasks={task.filter((task ,i) => { return task.isDone }).length} allTasks={task.length}/>})}
            </ul>
            <button className="addList" onClick={openAddModal}>+</button>
            { addModal && <AddModal addTaskFunction={addTaskFunction} tasks={tasks} setTasks={setTasks} list={lists} modalOpen={openAddModal} modalClose={closeAddModal} /> }
            { editModal && <EditModal tasks={lists.map((list)=> list.task)} setTasks={setTasks} list={lists} modalOpen={openEditModal} modalClose={closeEditModal} /> }

        </div>
        </div>
    )
}

export default MainList