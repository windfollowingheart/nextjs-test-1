// http://geek.itheima.net/v1_0/channels

import {createSlice} from "@reduxjs/toolkit"
import axios from "axios"

const channelStore = createSlice({
    name: "channel",
    initialState: {
        channelList: []
    },
    //同步修改方法
    reducers: {
        setChannelList(state, action) {
            state.channelList = action.payload
        }
    }
})

//解构actionCreater函数
const {setChannelList} = channelStore.actions
const reducer = channelStore.reducer

//编写异步
const getChannelList = () => {
    return async (dispatch) => {
        // const url = "http://localhost:3001/channels"
        const url = "https://geek.itheima.net/v1_0/channels"
        const res = await axios.get(url)
        dispatch(setChannelList(res.data.data.channels))
    }
}

export {getChannelList}

//导出reducer
export default reducer