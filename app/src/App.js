import './App.css';
import {BrowserRouter as Router,Routes, Route} from "react-router-dom"
import { HomePage } from './pages/HomePage';
import { FormSubmission } from './pages/FormSubmission';
function App() {
  return (
      <Router>
        <Routes>
          <Route path='/' element={<HomePage></HomePage>} />
          <Route path='/submit-form' element={<FormSubmission></FormSubmission>}/>
        </Routes>
      </Router>
  );
}

export default App;
