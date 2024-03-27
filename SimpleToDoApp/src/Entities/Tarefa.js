const Tarefa = () => {
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

export default Tarefa

/* export const tarefas = 
[
    {
      "id": "7f156055-aa04-49db-9a8e-4e24372631ba",
      "tarefa": "Organizar a gaveta",
      "descricao": "Organizar a gaveta da mesa do escritório",
      "feito": true
    },
    {
      "id": "11dc2cb0-a153-4a0e-b96d-5796343d80c3",
      "tarefa": "Limpar o banheiro",
      "descricao": "Limpar o banheiro às 18:00",
      "feito": false
    },
    {
      "id": "688385a9-860a-4080-a382-9a6fa46ec611",
      "tarefa": "Visitar o cliente",
      "descricao": "Visitar o cliente às 14:00",
      "feito": false
    },
    {
      "id": "761d947a-c786-4dc3-b2e9-ef5f4bffd8d3",
      "tarefa": "Ir ao mercado",
      "descricao": "Comprar leite e pão",
      "feito": false
    },
    {
      "id": "057bf8e5-7cd5-4b92-9d1a-5a81b0adc67e",
      "tarefa": "Testar sistema",
      "descricao": "Testar sistema",
      "feito": false
    },
    {
      "id": "e944a534-8699-42a6-b16c-56e53b08c85c",
      "tarefa": "Estudar Blazor e C#",
      "descricao": "Estudar mais sobre Blazor e C#",
      "feito": false
    },
    {
      "id": "02bd8fa9-50fd-4e4b-a71c-e21f9e00e932",
      "tarefa": "Meu novo teste",
      "descricao": "Meu novo teste de Simple To do app",
      "feito": false
    },
    {
      "id": "c9ac8b75-7ee6-41e3-bf21-01758e057b4c",
      "tarefa": "t",
      "descricao": "t",
      "feito": false
    },
    {
      "id": "4345c0ec-5ced-4c9d-8526-495b3d3a2108",
      "tarefa": "a",
      "descricao": "a",
      "feito": false
    },
    {
      "id": "c1cd6364-ec09-4d96-8cc6-b9eeccfbe4c2",
      "tarefa": "j",
      "descricao": "j",
      "feito": false
    },
    {
      "id": "5c2fc6af-2143-449b-a0d9-2ba0cbb1263d",
      "tarefa": "qqq",
      "descricao": "qq",
      "feito": false
    },
    {
      "id": "e0d3275f-bcc0-4054-ae3b-a09a3fe8ac34",
      "tarefa": "a",
      "descricao": "a",
      "feito": false
    },
    {
      "id": "7377d152-5905-43a2-818b-9562c5825a60",
      "tarefa": "a",
      "descricao": "a",
      "feito": false
    },
    {
      "id": "820d8581-6abb-4054-aae2-0f3dd584ea09",
      "tarefa": "p",
      "descricao": "p",
      "feito": false
    }
  ]; */
