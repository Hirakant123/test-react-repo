import { useState } from "react"


export function AddTask () {
    let [tasks, setTasks] = useState(["task1", "task2", "task3"]);
    let [newTask, setNewTask] =useState("");

    let handleInsert = () => {
        setTasks([...tasks, newTask]);
        setNewTask("")
    };

    return(
        <div>
            <pre>
                <code>
                    tasks: {JSON.stringify(tasks)};
                    <br />
                    newTask: {JSON.stringify(newTask)};
                </code>
            </pre>

               <input type="text" value={newTask} onChange={(e) => {setNewTask(e.target.value)}} />
               <button onClick={handleInsert}>Insert Task</button>

        </div>
    )
}