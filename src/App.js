import logo from './logo.svg';
import './App.css';
import Home from "./Page/Home"
import Navbar from './Component/Navbar';

function App() {
  return (
    <div className="w-screen min-h-screen">
      <Navbar></Navbar>
      <Home></Home>
    </div>
  );
}

export default App;
