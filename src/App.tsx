import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import { Inicio } from './components'


function App() {
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
