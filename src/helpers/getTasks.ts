import { Task } from "../models/task";
import taskset from "../data/taskset.json";

const getRandomtask = (): Task => taskset[Math.ceil(Math.random()*taskset.length)];


export const getTasks = (numberOfPlayers: 3 | 4 | 5, difficulty: number): Task[] => {
    let tasksDifficulty = 0;
    const tasks: Task[] = []
    let numberOfLoops = 0;
    const MAXIMUM_NUMBER_OF_LOOPS = 200;
    while (tasksDifficulty < difficulty && numberOfLoops < MAXIMUM_NUMBER_OF_LOOPS) {
        let newTask = getRandomtask();
        if (
            newTask.difficulty[numberOfPlayers] + tasksDifficulty <= difficulty
            && ! tasks.reduce((duplicateTask, task) => duplicateTask || task.title === newTask.title, false)
        ) {
            tasks.push(newTask);
        }
        tasksDifficulty = tasks.reduce((partialSum,task) => partialSum + task.difficulty[numberOfPlayers], 0);
        numberOfLoops += 1;
    }

    return tasks
}
