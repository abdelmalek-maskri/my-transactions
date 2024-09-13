import React from 'react'
import  './Home.css'


export default function TransactionList({ transactions }) {
  return (
    <ul className='transactions'>
        {transactions.map((transaction) => (
            <li key={transaction.id}>
                <p className='name'>{transaction.name}</p>
                <p className='amount'>£{transaction.amount}</p>
            </li>
        ))}
    </ul>
  )
}
