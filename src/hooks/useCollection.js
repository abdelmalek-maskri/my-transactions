import { useEffect, useState } from "react"
import { projectFireStore } from "../firebase/config"


export const useCollection = (collection) => {
    const [document, setDocument] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        let ref = projectFireStore.collection(collection);


        const unsubscribe = ref.onSnapshot((snapshot) => {
            let result = [];
            snapshot.docs.forEach((doc) => {
                result.push({...doc.data(), id: doc.id})
            })

            //update state
            setDocument(result);
            setError(null);
        },(error) => {
            console.log(error);
            setError("Could not fetch data :(")
        })

        //unsubscribe on unmount
        return () => unsubscribe()
    
    }, [collection])

    return {document, error}
}