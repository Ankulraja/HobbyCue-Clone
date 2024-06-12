import logo from "./logo.svg";
import "./App.css";
import Home from "./Page/Home";
import Navbar from "./Component/Navbar";
import { Route, Routes } from "react-router-dom";
import AddNew from "./Page/AddNew";
import User from "./Page/UserDetail/User";
import LandingPageScroll from "./Page/ScrollEffect/LandingPageScroll";

function App() {
  return (
    <div className="w-screen min-h-screen">
      <Routes>
      <Route path="/" element={<LandingPageScroll></LandingPageScroll>}></Route>
      </Routes>
      {/* <Navbar></Navbar>
      <div className="h-16 w-screen"></div>
      <Routes>
        <Route path="/user" element={<User></User>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/add-new" element={<AddNew></AddNew>}></Route>
      </Routes> */}
    </div>
  );
}

export default App;
