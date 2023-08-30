import { SearchInput } from "../shared/SearchInput";
import { Paginacao } from "../shared/Paginacao";
import { tarefas } from "../Entities/Tarefa"
import { Msg } from "../shared/Msg";

export const Home = () => {
    const Lista = tarefas
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
            {
                Lista == null ?
                    <p>Carregando tarefas...</p>
                    :
                    Lista.length <= 0 ?
                        <p>Sem tarefas</p>
                        :
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
                                {Lista.map((item) =>
                                    <tr>
                                        <th scope="col" class="col-1 align-middle"><input class="form-check-input" type="checkbox" id="flexCheckDefault" checked={item.feito} /></th>
                                        <td class="col-3 align-middle">{item.tarefa}</td>
                                        <td class="d-none d-md-table-cell col-6 align-middle">{item.descricao}</td>
                                        <td class="col-2">
                                            <div class="d-inline align-content-end">
                                                <a class="btn btn-primary m-1" href={`/edittask/${item.id}`}><span class="oi oi-pencil" /></a>
                                                <a class="btn btn-danger m-1"><span class="oi oi-trash" /></a>
                                            </div>
                                        </td>
                                    </tr>

                                )}
                            </tbody>
                        </table >
            }

            <Msg Titulo="Teste">
                Olá, este é um pequeno teste
            </Msg>
        </>
    )
};           

//    {/* <Msg /> */}

//     <Paginacao />
//     {/* <Paginacao QuantidadeTotalPaginas="QuantidadeTotalPaginas" paginaAtual="paginaAtual"
//         Raio="2" PaginaSelecionada="PaginaSelecionada" />         */}
//    </> 
//  );