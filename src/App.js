import React, { useState } from 'react';
import './style.css';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';

export default function App() {
  const [transactions, setTransactions] = useState([
    {
      id: 1,
      description: 'Salário',
      value: 1500,
    },
    {
      id: 2,
      description: 'Cafézinho',
      value: -2.5,
    },
    {
      id: 3,
      description: 'Jogo de Playstation 4',
      value: -350,
    },
  ]);

  return (
    <main>
      <Header />
      <div className="container">
        <Balance transactions={transactions} />
        <IncomeExpenses transactions={transactions} />
      </div>
    </main>
  );
}
