import { createContext, useEffect, useState } from "react";
import { GravarBD, LerBD } from "../services/TarefasServices";
import Tarefa from "../Entities/Tarefa";

export const TasksContext = createContext(
    {
        Tasks: [],
        AddTask: () => {},
        RemoveTask: () => {},
        ToggleTask: () => {},
        UpdateTask: () => {}
    }
);

export const TasksProvider = (props) => {
    const [Tasks, setTasks] = useState(() => LerBD());

/*     useEffect(() => {
        GravarBD(Tasks);
    }, [Tasks]) */

    const AddTask = (tarefa, descricao) => {
        const new_task = Tarefa.NewTask(tarefa, descricao)
        setTasks([...Tasks, new_task]);
    }

    const RemoveTask = (id) => {
        setTasks(() => Tasks.filter((task) => task.id !== id));
    }

    const UpdateTask = (tarefa) => {
       const task = Tasks.filter((Task) => Task.id === tarefa.id);
       const index = Tasks.indexOf(task);
       Tasks[index].tarefa = tarefa.tarefa;
       Task[index].descricao = tarefa.descricao;
       Task[index].feito = tarefa.feito;
       setTasks([...Tasks]);
    }

    const toggleTask = (task) => {
        const index = Tasks.indexOf(task);
        Tasks[index].feito = !task.feito;
        setTodos([...todos]);
    }

    return <TasksContext.Provider value={{Tasks, AddTask, RemoveTask, toggleTask, UpdateTask}}>{props.children}</TasksContext.Provider>;
};