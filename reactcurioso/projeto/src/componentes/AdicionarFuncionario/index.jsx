//src\componentes\AdicionarFuncionario\index.jsx

import { useState } from 'react';
import './style.css';




function AdicionarFuncionario({ onAdicionarFuncionario }) {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [usuario, setUsuario] = useState([]);

  
  const handleTelefoneChange = (e) => {
    let valor = e.target.value.replace(/\D/g, ''); 

    if (valor.length > 11) valor = valor.slice(0, 11);  

    
    if (valor.length > 10) {
      valor = valor.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    } else if (valor.length > 6) {
      valor = valor.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
    } else if (valor.length > 2) {
      valor = valor.replace(/(\d{2})(\d{0,5})/, '($1) $2');
    } else if (valor.length > 0) {
      valor = valor.replace(/(\d{0,2})/, '($1');
    }

    setTelefone(valor);
  };

  const handleAdicionarFuncionario = (event) => {
    event.preventDefault();
    if (nome && telefone) {
      setUsuario([...usuario, { nome, telefone }]);
      setNome('');
      setTelefone('');
    }
  };

  return (
    <div className="central">
      <div className="container">
        <h2>Adicionar Funcionário</h2>
        <form onSubmit={handleAdicionarFuncionario}>
          <input
            type="text"
            placeholder="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />

          <input
            type="tel"
            id="telefone"
            name="telefone"
            placeholder="(11) 99999-9999"
            value={telefone}
            onChange={handleTelefoneChange}
            required
          />

          <button type="submit">Adicionar</button>
        </form>

        <hr />
        <h3>Funcionários Adicionados</h3>
        <ul>
          {usuario.map((user, index) => (
            <li key={index}>
              {user.nome} - {user.telefone}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default AdicionarFuncionario;