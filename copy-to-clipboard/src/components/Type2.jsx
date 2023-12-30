import React, { useState } from 'react'
import "../styles/copyToClipboard.css"
import linkIcon from "../icons/link.png"
import linkedIcon from "../icons/linked.png"

const Type2 = () => {

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
            <div className="type-2">
                <img className="type-2-icon" src={copied ? linkedIcon : linkIcon} alt=""
                    onClick={() => handleClick()} />
                <span>{copied ? "Copied ✔️" : ""}</span>
            </div>
        </>
    )
}

export default Type2
