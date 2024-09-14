# My-Transactions

**My Transactions** is a simple transaction tracking app built with React and Firestore. The app allows users to sign up, log in, add, and manage their financial transactions. Users' data is securely stored in Firestore, and the app includes real-time updates with Firestore's cloud database.

# Live Demo
Check out the live app here: [My Daily Transactions]([https://my-daily-transactions.netlify.app/login](https://my-daily-transactions.netlify.app/login))


## Features

- **User Authentication**: Sign up and log in using Firebase Authentication.
- **Add Transactions**: Users can add transaction names and amounts.
- **View Transactions**: See all transactions in real-time, listed in descending order by date.
- **Delete Transactions**: Remove any transaction from the list.
- **Firestore Integration**: Firestore is used for storing and retrieving transaction data, with real-time updates.

## Usage
- **Sign Up or Log In**: Create an account or log in with your credentials.
- **Add Transactions**: Fill in the transaction name and amount in the form and click "Add Transaction."
- **View Transactions**: Transactions are listed in real-time as you add them, showing the name and amount.
- **Delete Transactions**: Click the 'x' button next to a transaction to remove it.

## Custom Hooks
- **useCollection**: Fetches real-time data from the Firestore database.
- **useFirestore**: Handles Firestore CRUD operations (Create, Read, Update, Delete).

## Components
- **Home**: Main component that displays the transaction list and the form to add new transactions.
- **TransactionForm**: Form component to add new transactions.
- **TransactionList**: Displays a list of transactions with the ability to delete any entry.
