const DBKey = "JSSimpleToDOAppBD";


export const LerBD = () => {
        const data = localStorage.getItem(DBKey) || '';
        try {
             const result = JSON.parse(data);
             return [{
                "id": "7f156055-aa04-49db-9a8e-4e24372631ba",
                "tarefa": "Organizar a gaveta",
                "descricao": "Organizar a gaveta da mesa do escritório",
                "feito": true
              }];
        } catch {
            return [{
                "id": "7f156055-aa04-49db-9a8e-4e24372631ba",
                "tarefa": "Organizar a gaveta",
                "descricao": "Organizar a gaveta da mesa do escritório",
                "feito": true
              }];
        }
}

export const GravarBD = (tarefas) => {
        localStorage.setItem(DBKey, JSON.stringify(tarefas));
}