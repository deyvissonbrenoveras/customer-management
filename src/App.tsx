import './App.css'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
 import logo from './assets/logo.svg'
 import { Link } from 'react-router-dom'
import RegisterCustomer from './pages/RegisterCustomer/RegisterCustomer'
import ListCustomers from './pages/ListCustomers/ListCustomers'
import LanguageSwitcher from './components/LanguageSwitcher/LanguageSwitcher'

function App() {

  return (
    <Router>
       <div id='app-root'>
        <div id="top-bar">
          <Link to="/" id="logo-container">
            <img src={logo} alt="logo" id="logo" />      
            <div>Cliente +</div>
          </Link>
          <h1>Gerenciamento de clientes</h1>  
          <LanguageSwitcher /> 
        </div>
        <div id='container'>
          <div id="sidebar">
            <ul>
              <li><Link to="/">Início</Link></li>
              <li><Link to="/cadastrar">Cadastrar Cliente</Link></li>
              <li><Link to="/listar">Listar Clientes</Link></li>
            </ul>
          </div>
          <div id="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cadastrar" element={<RegisterCustomer />} />
              <Route path="/listar" element={<ListCustomers />} />
            </Routes>          
          </div>
        </div>
        
      </div>
    </Router>   
  )
}

export default App
