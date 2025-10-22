// projeto\src\components\InfoAluno\index.jsx
import { useState } from 'react';
import React from 'react';
import './style.css';


function InfoAluno(){
    //const nome= "João da Silva";
    //const idade = 20;
    //const curso = DS;


    const [nome, setNome]= useState("Dan Lessa Santos");
    const[idade, setIdade]=useState("19");
    const[curso, setCurso]=useState("Desenvolvimento de sistemas");


    return(
        <div className='info-aluno'>
            <h1>Informações do aluno </h1>
            <p>Nome: {nome} </p>
            <p>Idade: {idade}</p>
            <p>Curso: {curso}</p>
        </div>
    );
}

export default InfoAluno;