const DBKey = "JSSimpleToDOAppBD";


export const LerBD = () => {
        return JSON.parse(localStorage.getItem(this.DBKey)) || [];
}

export const GravarBD = () => {
        localStorage.setItem(this.DBKey, this._tarefas);
}