import React from 'react';

/* const defaultTodos = [
  { text: 'Cortar cebolla', completed: true},
  { text: 'Take course', completed: false},
  { text: 'Caminar un poco', completed: false},
] */

function App() {
  React.useEffect(() => {
    console.log('use effect');
  });

  return <h1>Hola a todos</h1>;
}

export default App;
