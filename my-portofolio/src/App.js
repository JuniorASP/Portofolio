import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home'
import Experience from './Pages/Experience';
import Projects from './Pages/Projects';
import Navbar from './components/Navbar';
import "./App.css"
import Footer from './components/Footer';

function App() {
  return (
    <div className='app'>

    <Router>
    <Navbar/>

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/projects' element={<Projects/>}/>
      <Route path='/experience' element={<Experience/>}/>


    </Routes>
    <Footer/>
    </Router>

    </div>
  );
}

export default App;
