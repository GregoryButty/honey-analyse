import React from "react";
import "../component.style.css"

const Text = ({prevy, text}) => {
    return (
        <div className="prevyAndText">
            <h2 className="prevy">{prevy}</h2>
            <div className="text">{text}</div>
        </div>
    )
}

export default Text;