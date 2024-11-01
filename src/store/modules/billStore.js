//账单列表相关store

import {createSlice} from "@reduxjs/toolkit"
import axios from 'axios'

const billStore = createSlice({
    name: "build",
    initialState: {
        buildList: []
    },
    //同步修改方法
    reducers: {
        setBuildList(state, action) {
            state.buildList = action.payload
        }
    }
})

//解构actionCreater函数
const {setBuildList} = billStore.actions
const reducer = billStore.reducer

//编写异步
const getBillList = () => {
    return async (dispatch) => {
        const res = await axios.get("https://localhost:3001/ka")
        dispatch(setBuildList(res.data))
    }
}

export {getBillList}

//导出reducer
export default reducer