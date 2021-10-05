import React, { useState, useEffect, useCallback } from 'react';
import Total from './Components/Total/Total';
import History from './Components/History/History';
import Operation from './Components/Operation/Operation';
import { useLocalStorage } from './Components/useLocalStorage';

const App = () => {

  const [transactions, setTransactions] = useLocalStorage('calcMoney', []);
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [resultIncome, setResultIncome] = useState(0);
  const [resultExpenses, setResultExpenses] = useState(0);
  const [totalBalance, setTotalBalance] = useState(0);

  const calculate = useCallback(() => {
    const resultIncome = transactions.filter(item => item.add)
      .reduce((result, item) => result + item.amount, 0);

    const resultExpenses = transactions.filter(item => !item.add)
      .reduce((result, item) => result + item.amount, 0);

    const totalBalance = resultIncome - resultExpenses;

    setResultIncome(resultIncome);
    setResultExpenses(resultExpenses);
    setTotalBalance(totalBalance);
  }, [transactions]);

  const addTransaction = add => {
    const transactionsArr = transactions;

    transactionsArr.push({
      id: `cmr${(+new Date()).toString(16)}`,
      description,
      amount: +amount,
      add,
    });

    setTransactions(transactionsArr);
    setDescription('');
    setAmount('');
    calculate();
  };

  const addDescription = event => {
    setDescription(event.target.value);
  };

  const addAmount = event => {
    setAmount(event.target.value);
  };
  const delTransaction = id => {
    const transactionsItem = transactions.filter(item => item.id !== id);
    setTransactions(transactionsItem);
  };

  useEffect(() => {
    calculate();
  }, [calculate]);

  return (
    <React.Fragment>
      <header>
        <h1>Кошелёк</h1>
        <h2>Калькулятор расходов</h2>
      </header>
      <main>
        <div className="container">
          <Total
            resultIncome={resultIncome}
            resultExpenses={resultExpenses}
            totalBalance={totalBalance}
          />
          <History
            transactions={transactions}
            delTransaction={delTransaction}
          />
          <Operation
            addTransaction={addTransaction}
            addDescription={addDescription}
            addAmount={addAmount}
            description={description}
            amount={amount}
          />
        </div>
      </main>
    </React.Fragment>
  );
};

export default App;
