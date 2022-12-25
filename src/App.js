import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Footer from "./components/Footer";
import "./components/styles.css";

function App() {

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/login" element={<Login />}></Route>
          <Route index element={<Login />} />
          <Route exact path="/home" element={<Home />}></Route>
          <Route exact path="/signup" element={<Signup />}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
