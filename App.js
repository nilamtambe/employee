
import './App.css';
import Employeelist from "./components/Employeelist";
import Updatemployee from "./components/Updatemployee";
import Addemployee from "./components/Addemployee";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="container body-content">
          <Router>
            <Routes>
           
              <Route path="/" element={Employeelist} />
              <Route path="/updatemployee/:id" element={Updatemployee} />
              <Route path="/addemployee" element={Addemployee} />
              </Routes>
          </Router>
    </div>
  );
}

export default App;
