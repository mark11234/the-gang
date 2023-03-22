import './App.css';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import TableOfTasks from './components/tableOfTasks';
import { getTasks } from './helpers/getTasks';
import { useState } from 'react';
import { Task } from './models/task';

const App = () => {
  let [difficulty, setDifficulty] = useState(5);
  let [numberOfPlayers, setNumberOfPlayers] = useState<3|4|5>(3);
  let [tasks, setTasks] =useState<Task[]>([])
  const generateTasks = () => {
    setTasks(getTasks(numberOfPlayers,difficulty));
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          The Gang website
        </h1>
      </header>
      <div className="Difficulty-selector">
        <p> Difficulty: {difficulty}</p>
        <Slider value={difficulty} onChange={(value) => setDifficulty(parseInt(value.toString()))} min={1} max={25}/>
      </div>
      <div className="Number-of-players-selector">
        <button className="Number-of-players-button" id="3PlayersButton" onClick={() => setNumberOfPlayers(3)} disabled={numberOfPlayers===3}>3</button>
        <button className="Number-of-players-button" id="4PlayersButton" onClick={() => setNumberOfPlayers(4)} disabled={numberOfPlayers===4}>4</button>
        <button className="Number-of-players-button" id="5PlayersButton" onClick={() => setNumberOfPlayers(5)} disabled={numberOfPlayers===5}>5</button>
      </div>
      <div>
        <button className="Generate-tasks-button" onClick={() => generateTasks()} autoFocus={true}>Generate Tasks!</button>
      </div>
      {tasks[0] && <TableOfTasks tasks={tasks} numberOfPlayers={3}/>}
    </div>
  );
}

export default App;
