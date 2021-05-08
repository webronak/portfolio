import react from "react";
import './App.scss';
import Main from './components/Main';
import {
  BrowserRouter as Router,
} from "react-router-dom";


function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Main/>
    </Router>
  );
}

export default App;
