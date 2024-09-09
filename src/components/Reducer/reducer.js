import {
    APRI_MODAL, CHIUDI_MODAL
} from './actions';
const reducer = (state, action) => {
    if (action.type === APRI_MODAL) {
        console.log('modal aperto');
        console.log(action);
        return {
            ...state, 
            isModalOpen: true,
            modalContent:action.payload
        };
    }

    if(action.type === CHIUDI_MODAL){
        console.log('modal chiuso');
        return {
            ...state, 
            isModalOpen: false,
        }
    }
    return state;
};

export default reducer