import Tarefa from "../Entities/Tarefa";

const DBKey = "JSSimpleToDOAppBD";


export const LerBD = () => {
        const data = localStorage.getItem(DBKey) || '';
        try {
             const result = JSON.parse(data);
             return result;
        } catch {
            return [];
        }
}

export const GravarBD = (tarefas) => {
        localStorage.setItem(DBKey, JSON.stringify(tarefas));
}