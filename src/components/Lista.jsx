import '../App.css'

function Lista({TodoC, RemoveTodo, completeTodo}) {

  return (
    
    <section className='todo' style={{textDecoration: TodoC.isCompleted ? "line-through" : ""}}>
        <div className='content'>
            <p>{TodoC.text}</p> 
            <p className='category'> ({TodoC.category}) </p>
        </div>
        <div>
            <button className='complete' onClick={() => completeTodo(TodoC.id)}>Completar</button>
            <button className='remove' onClick={() => RemoveTodo(TodoC.id)}>X</button>
        </div>
    </section>
      
  )
}

export default Lista
