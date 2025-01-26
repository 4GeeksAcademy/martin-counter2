import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

const padNumber = (num, size) => {
    let s = "000000" + num;
    return s.slice(-size);
};

const SecondsCounter = (props) => {
    const formattedSeconds = padNumber(props.secondsPassed, 6).split('').map((digit, index) => (
        <span key={index} className="digit">{digit}</span>
    ));

    return (
        <div className="seconds-counter">
            <div className="icon-and-digits">
                <div className="clock-icon"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-clock" viewBox="0 0 16 16">
    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"/>
    </svg></div>
                <div className="digits-container">
                    {formattedSeconds}
                </div>
            </div>
        </div>
    );
};

export default SecondsCounter;
