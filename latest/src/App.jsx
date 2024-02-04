import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Filter from './FIlter';
import TransactionItem from './TransactionItem';
import Transactions from './Transactions';

function App() {
  const[transactions, setTransactions]= useState([])
  const[search,setSearch]=useState("")
  useEffect(() => {
    fetch("http://localhost:8001/transactions" + search)
      .then((response) => response.json())
      .then((transaction) => setTransactions(transaction))
      console.log({transactions})
  }, [search]);

  function addNewTransaction(newForm){
    setTransactions(transactions => [...transactions,newForm])

    const servers= {
      method:"POST",
      headers:{
        "content-type": "application/json"
      },
      body:JSON.stringify(newForm)
    }
    fetch("http://localhost:8001/transactions",servers )
      .then((response) => response.json())
      .then((newForm) => console.log(newForm))
  }

  function searching(e){
    e.preventDefault()
    setSearch(e.target.value)
}


  return (
      <div>
        <div className="header-container">
          <h2>The Royal Bank of Flatiron</h2>
        </div>
        <div>
          <Filter searching={searching} />
        </div>
        <div>
          <NewTransactionForm onTransactionSubmit={addNewTransaction} />
        </div>
        <div>
          <Transactions transactions={transactions}/>
        </div>
      </div>
  );
}



  export default App;