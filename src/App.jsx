import { useState } from 'react'
import Lista from './components/Lista'
import './App.css'
import ListaForm from './components/ListaForm'
import Search from './components/Search'

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
  
  const [search, setSearch] = useState("")

  //Criando um novo item para a lista
  const addTodo = (text, category) => { 
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

  //removendo item da lista
  const RemoveTodo = (id) => {
    const NewTodos = [...todos];
    const FilteredTodos = NewTodos.filter((todo) => todo.id !== id)
    setTodos(FilteredTodos)
  }

  const completeTodo = (id) => {
    const NewTodos = [...todos];
    NewTodos.map((todo) => todo.id === id ? (todo.isCompleted = !todo.isCompleted) : todo)
    setTodos(NewTodos)
  }

  return (
    <div className='app' >
      <h1>Lista de tarefas</h1>
      <Search search={search} setSearch={setSearch} />
      <div className='todo-list'>
        {todos.filter((todo) => todo.text.toLowerCase().includes(search.toLowerCase()))
        .map((todo)=> (
          <Lista key={todo.id} TodoC={todo} RemoveTodo={RemoveTodo} completeTodo={completeTodo}/>
        ))}

      </div>
      <ListaForm AddTodo={addTodo} />
    </div>
  )
}

export default App
