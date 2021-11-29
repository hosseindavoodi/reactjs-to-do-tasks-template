import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import Notes from './pages/Notes'
import Note from './pages/Note'

function App() {

  return (
    <Router>
      <div className="container dark">
        <div className="app">
         
          <Route path="/" exact component={Notes} />
          <Route path="/note/:id" component={Note} />
        </div>
      </div>
    </Router>
  );
}

export default App;
