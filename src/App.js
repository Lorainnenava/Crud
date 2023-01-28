import "./App.css";
import { Login } from "./components/log/Login";
import { Registro } from "./components/Registro";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
