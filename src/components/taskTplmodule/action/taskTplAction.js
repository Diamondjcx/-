// import {ACTIONTYPES} from "./actionTypes.js"
// let { TASKTPL_MANAGE } =ACTIONTYPES;

// export function changeData(data){
//     return {
//         type: TASKTPL_MANAGE["CHANGEDATA"],
//         data
//     }
// }

import {actionTypes} from "./actionTypes.js";
import Ajax from "Ajax";
import {urls} from "../dataConfig"

export const loadTableData = (pageNo = 1, pageSize = 10, search) =>  {
    const actionType = actionTypes.TASKTPL_LIST;    
    return dispatch => {
        dispatch({ type: actionType, data: {loading: true, search} });
        Ajax({
            url: urls.taskTplList,
            method: "GET",
            data: {
                //参数
            }

        }).done( data => {
            // 请求回来的数据
            const redux = data;
            dispatch({type: actionType, data: redux})
        }).fail( error => {
            dispatch({ type: actionType, data: {loading: false}})
        })
    }
}