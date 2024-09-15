import React from 'react'
import './Home.css'
import TransactionForm from './TransactionForm'
import {useAuthContext} from '../../hooks/useAuthContext'
import { useCollection } from '../../hooks/useCollection'
import TransactionList from './TransactionList'
import 'ldrs/ring'


export default function Home() {
  const {user} = useAuthContext();
  const {document, error, loading} = useCollection(
    'transactions',
    ["uid", "==", user.uid],
    ["createdAt", "desc"]
  )
  return (
    <div className='container' style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
      <div className='content' style={{ flex: 1, marginRight: '20px' }}>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {loading && <l-ring size={60} color="coral"></l-ring>}
        {document && <TransactionList transactions={document} />}
        {!loading && !document.length && (
          <div className="no-transactions" style={{ textAlign: 'center', marginTop: '20%', marginRight: '30%' }}>
            <p style={{ fontSize: '18px', fontWeight: 'bold' }}>No transactions yet</p>
            <p className="encouragement" style={{ fontSize: '16px', color: 'gray' }}>Start adding your transactions to keep track of your expenses!</p>
          </div>
        )}
      </div>

      <div className='sidebar' style={{ width: '300px' }}>
        <TransactionForm uid={user.uid}/>
      </div>
    </div>
  )
}
