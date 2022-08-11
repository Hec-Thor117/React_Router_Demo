import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home } from './Pages/Home';
import { Menu } from './Pages/Menu';
import { Contact } from './Pages/Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <div className='Navbar'>
          <Link to="/"> Home </Link>
          <Link to="/menu"> Menu </Link>
          <Link to="/contact"> Contact </Link>
        </div>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/menu" element={<Menu />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="*" element={<h1>ERROR: PAGE NOT FOUND</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
