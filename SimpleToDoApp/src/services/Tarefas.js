export class Tarefas
{
    static instancia;

    static Iniciar()
    {
        if(this.instancia == null)
        {
            this.instancia = new Tarefas();
        }
        return this.instancia;
    }

    QtdTarefasPorPagina = 5;
    DBKey = "JSSimpleToDOAppBD";

    Dados;

    LerBD()
    {
        return JSON.parse(localStorage.getItem(this.DBKey));
    }

    GravarBD()
    {
        localStorage.setItem(this.DBKey, this._tarefas);
    }
}