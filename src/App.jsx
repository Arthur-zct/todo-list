import { useState } from 'react'

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

  //o cara do video vai fazer tudo nesse componente, eu vou separar em diferentes componentes pra ficar certo, só passar a cons todos pra eles dps e fica tudo igual 

  return (
    <div className='app' >
      <h1>Lista de tarefas</h1>
      <div className='todo-list'>
        {todos.map((todo)=> (
          <section>
            <div className='content'>
              <p>{todo.text}</p> 
              <p className='category'> ({todo.category}) </p>
            </div>
            <div>
              <button>Completar</button>
              <button>X</button>
            </div>
          </section>
        ))}

      </div>
    </div>
  )
}

export default App
