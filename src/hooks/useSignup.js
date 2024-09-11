import { useEffect, useState } from 'react';
import { projectAuth } from '../firebase/config';
import { useAuthContext } from '../hooks/useAuthContext';

export const useSignup = () => {
    const [isCancelled, setIsCancelled] = useState(false);
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);

    const { dispatch } = useAuthContext();

    const signup = async (email, password, displayName) => {
        setError(null);
        setIsPending(true);
        
        try{
        //signup user
        const res = await projectAuth.createUserWithEmailAndPassword(email, password);
        

        if(!res){
            throw new Error('Could not complete signup');
        }

        //add display name to user
        await res.user.updateProfile({ displayName });

        //dispatch login action
        dispatch({type: 'LOGIN', payload: res.user});

        //update state  if we unmount before the async function completes
        //we only update state if we are not cancelled
        //if we are cancelled, we don't want to update state because it will cause an error
        if(!isCancelled){
            setIsPending(false);
            setError(null);
        }
        

        }catch(err){
            if(!isCancelled){
                console.log(err.message);
                setError(err.message);
                setIsPending(false);
            }
        }
    }

    useEffect(() => {
        //cleanup function to avoid memory leaks when component unmounts before async function completes
        //we only use cleanup functions inside useEffect functions
        return () => setIsCancelled(true);
    }, [])

    return { error, isPending, signup };
}