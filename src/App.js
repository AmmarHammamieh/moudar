import './App.css';
import Home from './Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Bio from './Bio';
import ArabicRhythm from "./ArabicRhythm";
import Gallery from './Gallery';
import Contact from './Contact';

function App() {
  return (
    <div className="h-fit">
      <Router>
        <Routes>
          <Route path="/" element={<Home/> }/>
          <Route path="/Bio" element={<Bio />} />
          <Route path="/ArabicRhythm" element={<ArabicRhythm />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
    </Router>
    </div>
  );
}

export default App;
