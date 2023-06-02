import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./pages/admin/Login";
import PrivetRouter from "./PrivetRouter";
import { AdminPanel } from "./pages/admin/Home";
import Authorisation from "./Authorisation";
import { Signup } from "./pages/admin/SignUp";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Authorisation />}>
            <Route path="/" element={<Login />} />
          </Route>

          <Route element={<Authorisation />}>
            <Route path="/sign_up" element={<Signup />} />
          </Route>

          <Route element={<PrivetRouter />}>
            <Route path="/dashboard" element={<AdminPanel />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
