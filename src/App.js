import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Students,
  Will,
  Alex,
  Gray,
  Devansh,
} from "./screens";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path="/" element={<Students />} />
          <Route exact path="/will" element={<Will />} />
          <Route exact path="/alex" element={<Alex />} />
          <Route exact path="/gray" element={<Gray />} />
          <Route exact path="/devansh" element={<Devansh />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;