export class Tarefa{
    constructor(_tarefa, _desc){
        this.id = create_GUID();
        this.tarefa = _tarefa;
        this.descricao = _desc;
        this.feito = false;
    }

    #S4() {
        return (((1+Math.random())*0x10000)|0).toString(16).substring(1); 
    }
    
    #create_GUID(){
        return (S4() + S4() + "-" + S4() + "-4" + S4().substr(0,3) + "-" + S4() + "-" + S4() + S4() + S4()).toLowerCase();
    }
}
