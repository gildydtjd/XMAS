import Home from './routes/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Santa from './routes/Santa';
import Rudolf from './routes/Rudolf';
import Sleigh from './routes/Sleigh';
import Gift from './routes/Gift';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/santa" element={<Santa />} />
          <Route path="/Rudolf" element={<Rudolf />} />
          <Route path="/sleigh" element={<Sleigh />} />
          <Route path="/gift" element={<Gift />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
