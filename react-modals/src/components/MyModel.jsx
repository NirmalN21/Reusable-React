import React from 'react'

const MyModel = (props) => {
    return (
        <>
            <div className="modal-parent" onClick={props.closeModal}></div>
            <div className="modal-child">
                <h1>Modal is Open</h1>
                <h2>Click on Close button or Outside the modal area to close the modal </h2>
                <button className="modal-close-btn" onClick={props.closeModal}>Close</button>
            </div>
        </>
    )
}

export default MyModel
