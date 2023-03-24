import { Task } from "../models/task"

type TaskRowProps = {
  task: Task,
  numberOfPlayers: 3 | 4 | 5
  useAlternativeTitle: boolean,
}

const TaskRow = (props: TaskRowProps) => (
  <tr>
    {!props.useAlternativeTitle && <td>{props.task.title}</td>}
    {props.useAlternativeTitle && <td>{props.task.alternativeTitle}</td>}
    <td>{props.task.difficulty[props.numberOfPlayers]}</td>
  </tr>
)
  
  export default TaskRow