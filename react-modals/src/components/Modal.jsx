import React, { useState } from 'react'
import MyModel from './MyModel';
import "../componentsCSS/modal.css"

const Modal = () => {

  const [showModal, setShowModal] = useState(false);

  const closeModal = () => setShowModal(false);

  return (
    <>
      <button className="modal-upload-btn" onClick={() => setShowModal(true)}>Upload</button>
      {showModal && <MyModel closeModal={closeModal} />}
    </>
  )
}

export default Modal