import { useState } from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
// import Header from "./components/Header";
// import './App.css'

function App() {
  // create state

  // const [name, setName] = useState("abc")

  // console.log("name", name)

  // // function to change name
  // const modifyValue = () => {
  //   setName("lakshay")
  // }

  // create state for count

  // const [count, setCount] = useState(0);

  // functions to modify count value

  // function increment() {
  //   setCount(count + 1);
  // }

  // decrement

  // function decrement() {
  //   setCount(count - 1);
  // }

  return (
    <>
      {/* <h1>Hello from React App!</h1>
      <h2>Name : {name}</h2>

      <button onClick={modifyValue}>Change Name</button> */}

      {/* displaying it on UI */}
      {/* <Header countVal = {count}/>
      <h1>Count Application</h1>
      <button onClick={increment}>Increment(+)</button>
      <span>{count}</span>
      <button onClick={decrement}>Decrement(-)</button> */}

      <Router>
         <Routes>
            <Route path = "/" element={<Home/>}/>
            <Route path = "/about" element={<About/>}/>
            <Route path = "/contact" element={<Contact/>}/>
         </Routes>
      </Router>
    </>
  );
}

export default App;
