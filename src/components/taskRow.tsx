import { Task } from "../models/task"

type TaskRowProps = {
  task: Task,
  numberOfPlayers: 3 | 4 | 5
}

const TaskRow = (props: TaskRowProps) => (
  <tr>
    <td className="tg-0lax">{props.task.title}</td>
    <td className="tg-0lax">{props.task.difficulty[props.numberOfPlayers]}</td>
  </tr>
)
  
  export default TaskRow