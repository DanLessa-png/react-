import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './componentes/Footer'
import Header from './componentes/Header'
import AdicionarFuncionario from './componentes/AdicionarFuncionario'
import Curioso from './componentes/Curioso'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <>
      <Header/>
      <hr />
      <h2 className='name'>Lista de Funcionarios</h2>
      <AdicionarFuncionario/>
      <hr />
      <Curioso/>
      <Footer/>
      <hr />
    </>
  )
}

export default App
