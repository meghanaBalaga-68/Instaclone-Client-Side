// import logo from './logo.svg';
import LandingPage from './components/LandingPage';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route path='/' element= {<LandingPage/>}></Route>
          
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
