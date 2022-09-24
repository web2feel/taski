import data from "../data.json"
export const initState = data

export const reducer = (state, action) => {
    switch(action.type){
        case "MOVE_TASK":{
            let {source, destination} = action.payload
            let tempState = {...state}
            let movedTask = tempState[source.droppableId][source.index]
            tempState[source.droppableId].splice(source.index,1)
            tempState[destination.droppableId].splice(destination.index,0,movedTask)
            return {...tempState}
        }
        case "ADD_TASK" : {
            let {status, data} = action.payload
            return {...state, [status]: [...state[status],data]}
        }
        case "DELETE_TASK":{
            let {id,status} = action.payload 
            return {...state,[status]:state[status].filter(item => item.id !== id)}
        }
        default:{
            return state;
        }
    }
}