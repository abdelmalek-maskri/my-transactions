import {projectFireStore, timestamp} from '../firebase/config';
import { useEffect, useState, useReducer } from 'react';

const initialState = {
    document: null,
    isPending: false,
    error: null,
    success: null
}

const firestoreReducer = (state, action) => {
    switch(action.type){
        case 'IS_PENDING':
            return {document: null, isPending: true, error: null, success: false}
        case 'ADDED_DOCUMENT':
            return {document: action.payload, isPending: false, error: null, success: true}
        case 'ERROR':
            return {document: null, isPending: false, error:  action.payload, success: false}
        default:
            return state
    }
}

export const useFirestore = (collection) => {
    const [response, dispatch] = useReducer(firestoreReducer, initialState);
    const [isCancelled, setIsCancelled] = useState(false);

    //collection res
    const ref = projectFireStore.collection(collection);

    //only dispatch if the comonent didn't mount or cancelled
    const dispatchIfNotCancelled = (action) => {
        if(!isCancelled){
            dispatch(action);
        }
    }

    //add document
    const addDocument = async (doc) => {
        dispatchIfNotCancelled({type: 'IS_PENDING'})
        try{
            const createdAt = timestamp.fromDate(new Date())
            const addedDocument = await ref.add({...doc, createdAt});

        dispatchIfNotCancelled({type: 'ADDED_DOCUMENT', payload: addedDocument});
        }catch(err){
            dispatchIfNotCancelled({type: 'ERROR', payload: err.message})
        }
        
    }

    //delete a document
    const deleteDocument = (id) =>{

    }

    useEffect(() => {
        return () => setIsCancelled(true);
    }, [])
    

    return {response, addDocument, deleteDocument}
}