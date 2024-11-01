import {createSlice} from "@reduxjs/toolkit"

const countStore = createSlice({
    name: "count",
    initialState: {
        count: 0
    },
    reducers: {
        add(state, action) {
            state.count += action.payload
        },
        minus(state, action) {
            state.count -= action.payload
        }
    }
})

const {add, minus} = countStore.actions
const reducer = countStore.reducer

export {add, minus}

export default reducer