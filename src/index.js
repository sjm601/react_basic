import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './index2.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
//import AxiosApp from './AxiosApp';
import AxiosApp2 from './AxiosApp2';
//import BootstrapApp from './BootstrapApp';
//import App2 from './App2';
//import ReduxToolkitApp from './ReduxToolkitApp';
//import ContextExampleApp2 from './ContextExampleApp2';
//import CounterApp2 from './CounterApp2';
//import Counter from './components/Counter';

const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(<React.StrictMode><App /></React.StrictMode>);
root.render(<React.StrictMode><AxiosApp2/></React.StrictMode>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
