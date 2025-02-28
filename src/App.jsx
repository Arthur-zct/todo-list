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

  return (
    <div className='app' >
      <h1>Lista de tarefas</h1>
      <div className='todo-list'>
        {todos.map((todo)=> (
          <Lista TodoC={todo}>

          </Lista>
        ))}

      </div>
      <ListaForm />
    </div>
  )
}

export default App
