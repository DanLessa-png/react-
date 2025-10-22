// projeto\src\components\InfoCurso\index.jsx
import './style.css';
import { useState } from 'react';


function InfoCurso(){
    const [nome, setNome]= useState("Desenvolvimento de Sistemas.");
    const [cargahoraria, setcargahoraria]=useState("158hrs");
    const [local, setlocal]= useState("Dendezeiros");
    const [datainicio, setdatainicio]= useState("06/06/2024")
    const [datatermino, setdatatermino]= useState("06/06/2026")




    return(
        <div className='info-curso'>

            <h2>Informações do curso</h2>
            <p>Nome: {nome}</p>
            <p>Carga horária: {cargahoraria}</p>
            <p>Local: {local}</p>
            <p>Data Início: {datainicio}</p>
            <p>Data término: {datatermino}</p>

        </div>
    );
}
export default InfoCurso;