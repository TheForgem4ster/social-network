import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogs = [
    {id: 1, name: "Max"},
    {id: 2, name: "Masha"},
    {id: 3, name: "Dasha"},
    {id: 4, name: "Katya"},
];

let messages = [
    {id: 1, message: "Hi are you?"},
    {id: 2, message: "I fun"},
    {id: 3, message: "Good"},
];
let posts = [
    {id: 1, message: "My name is Max", likeCounter: 25},
    {id: 2, message: "Cool", likeCounter: 0},
]
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App dialogs={dialogs} messages={messages} posts={posts}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
