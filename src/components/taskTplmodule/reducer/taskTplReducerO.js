import { actionTypes } from "../action/actionTypes";

// 需要缓存的数据   这里的数据都会被缓存
const initState = {
    loading: false,
    search: "",
    data: [],
    pagination: {
        total: 0,
        current: 1,
        pageSize: 10
    }
}

export default function (state = initState, action) {
    const data = action.data;
    if (action.type == actionTypes.TASKTPL_LIST) {
        return { ...state, ...data }
    } else if () {
        return {}
    } else {
        return state;
    }

}