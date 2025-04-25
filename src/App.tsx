import './App.css'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
 import {ReactComponent as Logo} from './assets/logo.svg'

function App() {

  return (
    <Router>
       <div id='app-root'>
        <div id="top-bar">   
          <Logo id="logo" />       
          <h1>My App</h1>
        </div>
        <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/about"element={About} /> */}
          </Routes>
      </div>
    </Router>   
  )
}

export default App
