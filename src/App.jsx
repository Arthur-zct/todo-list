import { useState } from 'react'
import Lista from './components/Lista'
import './App.css'
import ListaForm from './components/ListaForm'
import Search from './components/Search'
import Filter from './components/Filter'

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
      text: "Estudar matematica",
      category: "Estudos",
      isCompleted: false,
    }
  ]) //dados de inicio
  
  const [search, setSearch] = useState("")

  const [filter, setFilter] = useState("All")
  const [sort, setSort] = useState("Asc") //ordenar

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
      <Filter filter={filter} setFilter={setFilter} setSort={setSort} />
      <div className='todo-list'>
        {todos
        .filter(
          (todo) => 
            filter === "All" ? true 
          : filter === "Completed" 
          ? todo.isCompleted 
          : !todo.isCompleted 
          //se for All envia tudo, se nao verifica se quer os itens completos, se nao querer ele envia os incompletos.
        ) 
        .filter(
          (todo) => todo.text.toLowerCase().includes(search.toLowerCase())
        )
        .sort((a, b) => sort === "Asc" ? a.text.localeCompare(b.text) : b.text.localeCompare(a.text)) //"a" representa o primeiro elemento e "b" o ultimo
        .map((todo)=> (
          <Lista key={todo.id} TodoC={todo} RemoveTodo={RemoveTodo} completeTodo={completeTodo}/>
        ))}

      </div>
      <ListaForm AddTodo={addTodo} />
    </div>
  )
}

export default App
