import './App.css';
import Login from './components/Login';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './components/Home';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
      </Routes>

    </BrowserRouter>
      
    </div>
  );
}

export default App;
