import { useState } from 'react'
import Lista from './components/Lista'
import './App.css'
import ListaForm from './components/ListaForm'

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Criar funcionalidade x no sistema",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Ir para a academia",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Estudar React",
      category: "Estudos",
      isCompleted: false,
    }
  ]) //dados de inicio

  const addTodo = (text, category) => { //Criando um novo item para a lista
    const newTodos = [
      ...todos,
      {
        id: Math.floor(Math.random() * 10000),
        text,
        category,
        isCompleted: false,
      },
    ];

    setTodos(newTodos);
  }

  return (
    <div className='app' >
      <h1>Lista de tarefas</h1>
      <div className='todo-list'>
        {todos.map((todo)=> (
          <Lista key={todo.id} TodoC={todo}/>
        ))}

      </div>
      <ListaForm AddTodo={addTodo} />
    </div>
  )
}

export default App
