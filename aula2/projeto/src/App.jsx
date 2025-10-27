
import './App.css'
import AdicionarUsuario from './componentes/AdicionarUsuario'
import Footer from './componentes/Footer'
import Header from './componentes/Header'

function App() {
  

  return (
    <>
      <Header/>
      
      <h1 className='name'>Motoweek</h1>
      <AdicionarUsuario/>
      <Footer />
    </>
  )
}

export default App
