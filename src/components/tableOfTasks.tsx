import { Task } from "../models/task";
import TaskRow from "./taskRow";

type TableOfTasksProps = {
  tasks: Task[],
  numberOfPlayers: 3 | 4 | 5
}

const TableOfTasks = (props: TableOfTasksProps) => (
  <div className="Table">
    <table className="tg">
      <thead>
        <tr>
          <th className="tg-0lax">Task</th>
          <th className="tg-0lax">Difficulty</th>
        </tr>
      </thead>
      <tbody>
        {props.tasks.map(task => <TaskRow task={task} numberOfPlayers={props.numberOfPlayers}/>)}
      </tbody>
    </table>
  </div>
);

export default TableOfTasks



