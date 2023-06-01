import {
  BrowserRouter as Router,
  Routes
} from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import Home from "./pages/Home";

function App() {
  return (
    <Router>
        <Navbar />
        <Home />
      <Routes>
    </Routes>
    </Router>
  );
}

export default App;
