import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from "./redux/redux-store";
import {Provider} from "react-redux";
import SamuraiJSApp from "./App";


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
   <SamuraiJSApp/>
);


reportWebVitals();

