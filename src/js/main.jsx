import React from 'react'
import ReactDOM from 'react-dom/client'
import { createRoot } from 'react-dom/client';

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';
import SecondsCounter from './components/Seconds.Counter';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

let secondsPassed = 0;

const renderCounter = () => {
    secondsPassed++;
    root.render(
        <React.StrictMode>
            <ParentComponent secondsPassed={secondsPassed} />
        </React.StrictMode>
    );
};

const ParentComponent = (props) => {
    return (
        <div className="top-banner">
            
            <SecondsCounter secondsPassed={props.secondsPassed} />
        </div>
    );
};

window.addEventListener("load", () => {
    setInterval(renderCounter, 1000);
});