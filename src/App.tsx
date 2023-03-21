import React from 'react';
import './App.css';
import { getTasks } from './helpers/getTasks';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          The Gang website
        </p>
        <p>
          {getTasks(3,12)[0].title}
        </p>
      </header>
    </div>
  );
}

export default App;
