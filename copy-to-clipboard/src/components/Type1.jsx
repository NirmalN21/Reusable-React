import React, { useState } from 'react'
import "../styles/copyToClipboard.css"
import copyIcon from "../icons/copy.png"
import copiedIcon from "../icons/copied.png"

const Type1 = () => {

    const [copied, setCopied] = useState(false);
    const [input, setInput] = useState("https://github.com/NirmalN21");

    const handleClick = () => {
        navigator.clipboard.writeText(input);
        setCopied(true);

        setTimeout(() => {
            setCopied(false)
        }, 1000);
            
    }

    return (
        <>
            <div className="type-1">
                <input type="text"
                    value={input}
                />
                <img className="type-1-icon" src={copied ? copiedIcon : copyIcon} alt=""
                    onClick={() => handleClick()} />
                <span>{copied ? "Copied ✔️" : ""}</span>
            </div>
        </>
    )
}

export default Type1
