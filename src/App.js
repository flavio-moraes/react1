import React from 'react';
import './App.css';
import { TodoList } from './componentsTODOlist/TodoList';
import { MeuComponente } from './MeuComponente';
import { MeuComponenteClasse } from './MeuComponenteClasse';

/*
function BemVindo() {
  return <h1>Olá mundo!</h1>;
}

function App() {
  return (
    <div className="App">
      <BemVindo />
      <MeuComponenteClasse message="Olá mundo!" />
    </div>
  );
}
*/

/*
class App extends React.Component {
  render() {
    return <h1>Testando 1,2,3...</h1>
  }
}
*/

function App() {
  return (
    <section>
      <h1>Custom TODO List</h1>
      <TodoList />
    </section>
  );
}





export default App;
