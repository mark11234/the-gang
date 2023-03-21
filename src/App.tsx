import './App.css';
import TableOfTasks from './components/tableOfTasks';
import { getTasks } from './helpers/getTasks';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          The Gang website
        </h1>
        <TableOfTasks tasks={getTasks(3,12)} numberOfPlayers={3}/>
      </header>
    </div>
  );
}

export default App;
