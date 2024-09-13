import React from 'react'
import './Home.css'
import TransactionForm from './TransactionForm'
import {useAuthContext} from '../../hooks/useAuthContext'
import { useCollection } from '../../hooks/useCollection'
import TransactionList from './TransactionList'


export default function Home() {
  const {user} = useAuthContext();
  const {document, error} = useCollection('transactions')
  return (
    <div className='container'>
      <div className='content'>
        {error && <p>{error}</p>}
        {document && <TransactionList transactions={document}/>}
      </div>

      <div className='sidebar'>
        <TransactionForm uid={user.uid}/>
      </div>
    </div>
  )
}
