import React, { Component } from 'react';
import Total from './Components/Total/Total';
import History from './Components/History/History';
import Operation from './Components/Operation/Operation';

class App extends Component {
  state = {
    transactions: [],
    description: '',
    amount: '',
    resultIncome: 0,
    resultExpenses: 0,
    totalBalance: 0,
  };

  addTransaction = add => {
    const transactions = [...this.state.transactions];

    transactions.push({
      id: `cmr${(+new Date()).toString(16)}`,
      description: this.state.description,
      amount: +this.state.amount,
      add,
    });

    this.setState({ transactions, description: '', amount: '' }, this.calculate);
  };

  addDescription = event => {
    this.setState({ description: event.target.value });
  };

  addAmount = event => {
    this.setState({ amount: event.target.value });
  };

  calculate() {
    const resultIncome = this.state.transactions.filter(item => item.add)
      .reduce((result, item) => result + item.amount, 0);

    const resultExpenses = this.state.transactions.filter(item => !item.add)
      .reduce((result, item) => result + item.amount, 0);

    const totalBalance = resultIncome - resultExpenses;

    this.setState({ resultIncome, resultExpenses, totalBalance });

  }

  render() {
    return (
      <React.Fragment>
        <header>
          <h1>Кошелёк</h1>
          <h2>Калькулятор расходов</h2>
        </header>
        <main>
          <div className="container">
            <Total
              resultIncome={this.state.resultIncome}
              resultExpenses={this.state.resultExpenses}
              totalBalance={this.state.totalBalance}
            />
            <History transactions={this.state.transactions} />
            <Operation
              addTransaction={this.addTransaction}
              addDescription={this.addDescription}
              addAmount={this.addAmount}
              description={this.state.description}
              amount={this.state.amount}
            />
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
