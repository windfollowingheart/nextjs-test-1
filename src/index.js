import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import sum from "@/test";
// 导入定制主题文件
import "./themes.css"
import {RouterProvider} from "react-router-dom"
import router from "./router";
import { Provider } from 'react-redux';
import store from "./store";

// console.log(sum(1, 2)); 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
      {/* <RouterProvider router={router}/> */}
      <App/>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
