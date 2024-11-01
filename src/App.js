import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import {add, minus} from "@/store/modules/countStore"
import {getChannelList} from "@/store/modules/channelStore"
import {useEffect} from "react"



function App() {
  const dispatch = useDispatch()
  const {count} = useSelector(state=>state.count)
  const {channelList} = useSelector(state=>state.channel)
  // console.log(channelList)
  useEffect(()=>{
    dispatch(getChannelList())
    // console.log(channelList)

  },[dispatch])

  return (
   <div>
    <button onClick={()=>dispatch(add(2))}>+</button>
    <div>{count}</div>
    <button onClick={()=>dispatch(minus(2))}>-</button>

    <div>
      {
        channelList.map(item=>{
          return <div key={item.id}>{item.name}</div>
        })
      }
    </div>
   </div>
   
  );
}

export default App;
