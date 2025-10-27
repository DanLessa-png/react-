//src\componentes\AdicionarUsuario\index.jsx

import { useState } from 'react'
import './style.css'

function AdicionarUsuario({onAdicionarUsuario}){
    const [nome, setNome ]=useState('');
    const [email, setEmail]=useState('');

    const[usuario, setUsuario]= useState([]);

    const handleAdicionarUsuario = (event )=>{
        event.preventDefault();
        if(nome && email){
            setUsuario([...usuario, {nome, email}]);
            setNome('');
            setEmail('');
        }

    }

    return(
    <div className='central'>
        <div className='container'>
            <h2>Adicionar Usuarios</h2>
            <form onSubmit={handleAdicionarUsuario}>
                <input 
                type="text"
                placeholder='Nome'
                value={nome}
                onChange={(e)=> setNome(e.target.value)} 
                />
                <input 
                type="email"
                placeholder='Email'
                value={email}
                onChange={(e)=> setEmail(e.target.value)} 
                />
                <button type='submit'>Adicionar</button>
            </form>
            <hr />
            <h3>Usuarios Adicionados</h3>
            <ul>
                {usuario.map((user, index)=>(
                    <li key={index}>
                        {user.nome} - {user.email}
                    </li>

                ))}

            </ul>
        </div>
    </div>
        
    )
}
export default AdicionarUsuario;