import React from 'react';//core foundational library both was present in browser
import ReactDOM from 'react-dom/client';//implementation on web
import App from './App';
//React make their own ReactDOM 
const root = ReactDOM.createRoot(document.getElementById('root'));
//browser dom render html here we do same render App
root.render(
    <App />
);
