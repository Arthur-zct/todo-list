import '../App.css'

function Lista({TodoC, RemoveTodo}) {

  return (
    
    <section>
        <div className='content'>
            <p>{TodoC.text}</p> 
            <p className='category'> ({TodoC.category}) </p>
        </div>
        <div>
            <button className='complete'>Completar</button>
            <button className='remove' onClick={() => RemoveTodo(TodoC.id)}>X</button>
        </div>
    </section>
      
  )
}

export default Lista
