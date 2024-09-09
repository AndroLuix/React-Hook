const CODE = `
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const Modal = ({ modalContent, isModalOpen, closeModal }) => {    

  return (
    <>
      {isModalOpen && (
        <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Modal</h5>
                <button
                  type="button"
                  className="btn-close"
                  aria-label="Close"
                  onClick={closeModal}
                ></button>
              </div>
              <div className="modal-body">
                <p>{modalContent || 'Sono un modal'} </p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={closeModal}
                >
                  Chiudi
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;


import React, { useReducer } from 'react';
import Modal from './Modal';
import reducer from './reducer';
import { type } from '@testing-library/user-event/dist/type';
import {
    APRI_MODAL, CHIUDI_MODAL
} from './actions';

const initialState = {
    isModalOpen: false,
    modalContent: 'Eccomi, sono un modal',
};

const UserReducerComponents = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const apriModal = () => {
        dispatch({ type: APRI_MODAL , payload:'message of modal'});
    };

    const chiudiModal = () =>{
        dispatch({type:CHIUDI_MODAL})
    }

    return (
        <div>
            <h3>Use Reducer</h3>
            <button className='btn btn-primary' onClick={apriModal}>Apri Modal</button>
            <Modal modalContent={state.modalContent} isModalOpen={state.isModalOpen} closeModal={chiudiModal} />
        </div>
    );
};

export default UserReducerComponents;
` 

export {CODE}