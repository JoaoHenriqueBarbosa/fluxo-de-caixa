import React from 'react';
import { formatToBRL } from 'brazilian-values';

export default function IncomeExpenses(props) {
  const { transactions } = props;

  const income = transactions
    .map((transaction) => transaction.value)
    .filter((value) => value > 0)
    .reduce((acc, value) => (acc += value), 0);

  const expenses =
    transactions
      .map((transaction) => transaction.value)
      .filter((value) => value < 0)
      .reduce((acc, value) => (acc += value), 0) * -1;

  return (
    <div className="inc-exp-container">
      <div>
        <p className="money-label">Entradas</p>
        <p className="money plus">{formatToBRL(income)}</p>
      </div>
      <div>
        <p className="money-label">Saídas</p>
        <p className="money minus">{formatToBRL(expenses)}</p>
      </div>
    </div>
  );
}
