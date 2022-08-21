import React from 'react';
import { Header } from './Header';
import { Content } from './Content';

/* const defaultTodos = [
  { text: 'Cortar cebolla', completed: true},
  { text: 'Take course', completed: false},
  { text: 'Caminar un poco', completed: false},
] */

function App() {
  React.useEffect(() => {
    console.log('use effect');
  });

  return (
    <React.Fragment>
      <Header></Header>
      <Content></Content>
    </React.Fragment>
  );
}

export default App;
