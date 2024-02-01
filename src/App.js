import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Card from './components/Summery';

function App() {
  return (
    <>
    <Router>
      <div className='app'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/card' element={<Card />} />
      </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
