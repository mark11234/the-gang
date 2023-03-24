import { Task } from "../models/task";
import TaskRow from "./taskRow";

type TableOfTasksProps = {
  tasks: Task[],
  numberOfPlayers: 3 | 4 | 5,
  useAlternativeTitle: boolean,
}

const TableOfTasks = (props: TableOfTasksProps) => (
  <div>
    <table>
      <thead>
        <tr>
          <th>Task</th>
          <th>Difficulty</th>
        </tr>
      </thead>
      <tbody>
        {props.tasks.map(task => <TaskRow task={task} numberOfPlayers={props.numberOfPlayers} useAlternativeTitle={props.useAlternativeTitle}/>)}
      </tbody>
    </table>
  </div>
);

TableOfTasks.defaultProps = {
  playingCards: false,
}

export default TableOfTasks


