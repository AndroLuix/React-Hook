import React, { useReducer } from 'react';
import Modal from './Modal';
import reducer from './reducer';
import { type } from '@testing-library/user-event/dist/type';
import {
    APRI_MODAL, CHIUDI_MODAL
} from './actions';

import {CODE} from './useReduceCode';
import CodeBlock from '../Tools/CodeBlock';


const initialState = {
    isModalOpen: false,
    modalContent: <CodeBlock code={CODE}/>,
};

const UserReducerComponents = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const apriModal = () => {
        dispatch({ type: APRI_MODAL , payload:<CodeBlock code={CODE}/>});
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
