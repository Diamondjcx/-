import { actionTypes } from "../action/actionTypes";

const initState = {
    loading: false,
    search : "",
    data : [],
    total: 0,
    current: 1,
    pageSize: 10
}

export default function(state = initState, action) {
    const data = action.data;
    if (action.type == actionTypes.TASKTPL_LIST) {
        return {...state, ...data}
    } else if (){
        return {}
    } else {
        return state;
    }
    
}