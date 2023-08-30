export class Tarefas
{
    QtdTarefasPorPagina = 5;
    DBKey = 'JSSimpleToDOAppBD';

    Dados;
    _tarefas;

    static async LerBD()
    {
        return await localStorage.getItem(this.DBKey);
    }

    async GravarBD()
    {
        await localStorage.setItem(this.DBKey, this._tarefas);
    }
}