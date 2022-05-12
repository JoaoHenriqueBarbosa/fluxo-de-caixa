import React, { useState } from 'react';
import './style.css';
import Header from './components/Header';
import Balance from './components/Balance';

export default function App() {
  const [expenses, setExpenses] = useState([
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
  ]);

  return (
    <main>
      <Header />
      <div className="container">
        <Balance expenses={expenses} />
      </div>
    </main>
  );
}
