const List = ({titleOfList, dateOfCreate, complatedTasks, uncomplatedTasks, allTasks, edit}) => {
    return (
        <li className="singularList" onClick={edit}>
            <h6>{titleOfList}</h6>
            <p>Created at: {dateOfCreate}</p>
            <p><span>Complated: {complatedTasks} </span><span>Uncomplated: {uncomplatedTasks} </span><span>All: {allTasks} </span></p>
        </li>
        
    )
}

export default List