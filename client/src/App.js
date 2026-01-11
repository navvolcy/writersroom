import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/NavBar";
import "./App.css";

function App() {
  return (
    <Router>
      
        <div className="w-full max-w-8xl">
          <NavBar />
        </div>     
    </Router>
  );
}

export default App;

