import { createContext, useEffect, useState } from "react";
import { LerBD } from "../services/TarefasServices";

export const LanguageContext = createContext(
    {
        Tasks: [],
        AddTask: () => {},
        RemoveTask: () => {},
    }
);

export const TasksProvider = (props) => {
    const [Tasks, setTasks] = useState(LerBD);

    const AddTask = () => {
        //setTasks(() => );
    }

    const RemoveTask = () => {
    }

    return <TasksContext.Provider value={{Tasks, AddTask, RemoveTask}}>{props.children}</TasksContext.Provider>;
};