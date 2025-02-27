import '../App.css'

function Lista({TodoC}) {

  return (
    
    <section>
        <div className='content'>
            <p>{TodoC.text}</p> 
            <p className='category'> ({TodoC.category}) </p>
        </div>
        <div>
            <button>Completar</button>
            <button>X</button>
        </div>
    </section>
      
  )
}

export default Lista
