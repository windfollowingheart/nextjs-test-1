// 组合子模块 导出store实例

import { configureStore } from '@reduxjs/toolkit'
import billReducer from './modules/billStore'
import countReducer from './modules/countStore'
import channelReducer from './modules/channelStore'


const store = configureStore({
  reducer: {
    bill: billReducer,
    count: countReducer,
    channel: channelReducer
  }
})

export default store