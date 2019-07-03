import React from 'react';
import Stash from './Stash';
import AddYarn from './AddYarn'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
          <ul>
            <li>
              <Link to="/">YarnStash</Link>
            </li>
          </ul>

          <hr />

          <Route exact path="/" component={Stash} />
          <Route path="/add-yarn" component={AddYarn} />
      </div>
    </Router>
  );
}

export default App;
