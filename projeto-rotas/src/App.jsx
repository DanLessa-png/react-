import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './components/Footer';
import Header from './components/Header';
import { SobreNosPage } from './pages/SobreNosPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FaleConosco } from './pages/FaleConoscoPage';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
        <main>
          <Routes>
            <Route path='/'/>
            <Route path='/sobre' element={<SobreNosPage/>}/>
             <Route path='/contato' element={<FaleConosco/>}/>
          </Routes>
        </main>
      <hr />
        <Footer />
     
    </>
  )
}

export default App
