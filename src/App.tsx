import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Inicio } from './components'


function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div>
        <Routes>
          {/* Definir las rutas para cada componente */}
          <Route path="/" element={<Inicio />} /> {/* Ruta principal */}
        </Routes>
      </div>
    </Router>
  )
}

export default App
