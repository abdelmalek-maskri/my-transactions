import { useEffect, useState } from "react";
import { projectAuth } from "../firebase/config";
import { useAuthContext } from "../hooks/useAuthContext";

export const useLogout = () => {
    const [isCancelled, setIsCancelled] = useState(false);
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const { dispatch } = useAuthContext();

    const logout = async () => {
        setError(null);
        setIsPending(true);

        try{    
            //sign user out
            await projectAuth.signOut();

            //dispatch logout action
            dispatch({type: 'LOGOUT'});

            //update state  if we unmount before the async function completes
            //we only update state if we are not cancelled
            //if we are cancelled, we don't want to update state because it will cause an error
            if(!isCancelled) {
                setIsPending(false);
                setError(null);
            }

        }catch(err){
            if(!isCancelled) {
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

    return { error, isPending, logout };
}

