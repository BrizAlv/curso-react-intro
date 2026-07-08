import { useState } from 'react';
import { useLocalStorage } from './useLocalStorage';
import { AppUI } from './AppUI';
import { bg1 } from '../BackgroundSelector';

function App() {
  const [searchValue, setSearchValue] = useState('');
  console.log('Los usuarios buscan todos de ' + searchValue);

  const [todos, setTodos, loading, error] = useLocalStorage('TODOS_V1', []);
  const [background, setBackground] = useState(bg1);

  // 1. Filtrar todos los todos por el texto buscado
  const searchedTodos = todos.filter(todo =>
    todo.text.toLowerCase().includes(searchValue.toLowerCase())
  );

  // 2. Separar los resultados filtrados en pendientes y completadas
  const pendingTodos = searchedTodos.filter(todo => !todo.completed);
  const completedTodos = searchedTodos.filter(todo => todo.completed);

  const addTodo = (text) => {
    setTodos([...todos, { text, completed: false }]);
  };

  const deleteTodo = (text) => {
    setTodos(todos.filter(todo => todo.text !== text));
  };

  const toggleComplete = (text) => {
    setTodos(todos.map(todo =>
      todo.text === text ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  return (
    <AppUI
      loading={loading}
      error={error}
      pendingTodos={pendingTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      addTodo={addTodo}
      deleteTodo={deleteTodo}
      toggleComplete={toggleComplete}
      background={background}
      setBackground={setBackground}
    />
  );
}

export default App;
