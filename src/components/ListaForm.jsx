import {useState} from "react";

const ListaForm = () => {

    const [value, setValue] = useState("") //titulo
    const [category, setCategory] = useState("") //categoria

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Formulario enviado")
    }
    return (
        <div className="todo-form">
            <h2>Criar tarefa:</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Digite o titulo"/>
                <select>
                    <option value="">Selecione uma categoria</option>
                    <option value="Trabalho">Trabalho</option>
                    <option value="Pessoal">Pessoal</option>
                    <option value="Estudos">Estudos</option>
                </select>
                <button type="submit">Criar tarefa</button>
            </form>
        </div>
    ) 
}

export default ListaForm