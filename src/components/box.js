import React from "react";
import "./box.css";

export const Box = ({ value, onClick }) => {
    const style = value === "x" ? "box x" : "box O";
    return (
        <button className={style} onClick={onClick}>{value}</button>
    )
}

