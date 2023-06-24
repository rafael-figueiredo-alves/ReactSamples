import { SearchInput } from "../shared/SearchInput";
import { Paginacao } from "../shared/Paginacao";
import { Msg } from "../shared/Msg";

export const Home = () => {   
 return (
   <>
         <div className="container-fluid">
             <div className="row">
                 <div className="d-none d-md-table-cell col-8 align-middle">
                     <h3 className="d-none d-md-inline">Estas são as minhas Tarefas</h3>
                 </div>
                 <div className="col justify-content-end">
                     {/* <SearchInput PesquisarTarefa="Pesquisar" Limpar="LimparPesquisa" /> */}
                     <SearchInput />
                 </div>
             </div>
         </div>

         <hr /> 

            {/* @if(Lista == null)
            {
                <p>Carregando tarefas...</p>
            }
            else
            if(!Lista.Any())
            {
                <p>Sem tarefas</p>
            }
            else
            { */}
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Tarefa</th>
                            <th scope="col" className="d-none d-md-table-cell">Descrição</th>
                            <th scope="col">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* @foreach(Tarefa item in Lista!)
                        {
                            <tr>
                                <th scope="col" class="col-1 align-middle"><input class="form-check-input" type="checkbox" @bind="item.feito" id="flexCheckDefault" @onclick="@(() => SetarTarefa(item.id, !item.feito))"></th>
                                <td class="col-3 align-middle">@item.tarefa</td>
                                <td class="d-none d-md-table-cell col-6 align-middle">@item.descricao</td>
                                <td class="col-2">
                                    <div class="d-inline align-content-end">
                                        <a class="btn btn-primary" href="edittask/@item.id"><span class="oi oi-pencil" /></a>
                                        <a class="btn btn-danger" @onclick="@(()=> RemoveTarefa(item.id))"><span class="oi oi-trash" /></a>
                                </div>
                            </td>
                </tr>
        } */}
                </tbody>
    </table >

   {/* <Msg /> */}

    <Paginacao />
    {/* <Paginacao QuantidadeTotalPaginas="QuantidadeTotalPaginas" paginaAtual="paginaAtual"
        Raio="2" PaginaSelecionada="PaginaSelecionada" />         */}
   </> 
 );
}