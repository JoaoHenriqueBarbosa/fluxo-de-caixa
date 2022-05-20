import React from 'react';
import { formatToBRL } from 'brazilian-values';

export default function Balance(props) {
  const { transactions } = props;

  const total = transactions
    .map((transaction) => transaction.value)
    .reduce((acc, item) => (acc += item), 0);

  return (
    <div>
      <p className="balance-label">Seu saldo</p>
      <p className="balance-value">{formatToBRL(total)}</p>
    </div>
  );
}
