import React from 'react';
import './ResetBoard.css'
export const ResetButton = ({ resetBoard }) => {
    return (
        <button onClick={resetBoard} className="reset-btn">Reset</button>
    )
}