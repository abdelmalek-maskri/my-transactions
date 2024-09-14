import React, { useEffect } from 'react'
import { useState } from 'react'
import { useFirestore } from '../../hooks/useFirestore';
export default function TransactionForm({ uid }) {
  
    const [name, setName] = useState('');
    const [amount, setAmount] = useState(0);

    const {addDocument, response} = useFirestore('transactions')
  
    function handleSubmit(e){
      e.preventDefault();
      addDocument({name, amount, uid});
    }
    //reset inputs when the addDocument is successful
    useEffect(() => {
        setName('');
        setAmount('');
    }, [response.success])

    return (
    <>
        <h3>Add Transaction</h3>
        <form onSubmit={handleSubmit}>
            <label>
                <span>Transaction name:</span>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required placeholder='Transaction...'/>
            </label>
            <label>
                <span>Amount:</span>
                <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} required placeholder='🥖💸'/>
            </label>
            <button>Add Transaction</button>
        </form>
    </>
  )
}
