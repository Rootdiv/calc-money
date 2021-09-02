import React from 'react';
import ReactDOM from 'react-dom';
import './normalize.css';
import './style.css';
import App from './App';

// const FunctionComponents = props => React.createElement('h1', { id: 'hi' }, props.text);
// const Header = ({ text }) => <h1 id="hi">{text}</h1>;

// const Element = React.createElement('p', null, 'Параграф');
// const Element = <p>Параграф</p>;

// class Main extends React.Component {
//   render() {
//     return (
//       <div className="main">
//         <Header text={'Свойство текст ' + this.props.count} />
//         {Element}
//       </div>
//     );
//     // return React.createElement('div', { className: 'main' },
//     //   React.createElement(FunctionComponents, { text: 'Свойство текст' }), Element);
//   }
// }

ReactDOM.render(
  <React.StrictMode>
    {/* <Main count={5} /> */}
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
