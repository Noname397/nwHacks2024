import './App.css';
import {BrowserRouter as Router,Routes, Route} from "react-router-dom"
import { HomePage } from './pages/HomePage';
import { Result } from './pages/Result';

function App() {
  return (
      <Router>
        <Routes>
          <Route path='/' element={<HomePage></HomePage>} />
          <Route path='/result' element={<Result></Result>} />
        </Routes>
      </Router>
  );
}

export default App;
