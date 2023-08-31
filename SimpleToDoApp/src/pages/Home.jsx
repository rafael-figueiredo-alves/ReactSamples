import { SearchInput } from "../shared/SearchInput";
import { Paginacao } from "../shared/Paginacao";
import { tarefas } from "../Entities/Tarefa"
import { Msg } from "../shared/Msg";
import { useEffect, useState } from "react";
import { Tarefas } from "../services/Tarefas"

export const Home = () => {
    const [Lista, SetLista] = useState([]);

    useEffect(() => {
        const ListaTarefas = Tarefas.Iniciar().LerBD();

        if(ListaTarefas != null)
        {
            SetLista(ListaTarefas);
        }
    }, [Lista])

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
                                        <th id={item.id} />
                                        <th scope="col" class="col-1 align-middle"><input className="form-check-input" type="checkbox" id="flexCheckDefault" checked={item.feito} /></th>
                                        <td className="col-3 align-middle">{item.tarefa}</td>
                                        <td className="d-none d-md-table-cell col-6 align-middle">{item.descricao}</td>
                                        <td className="col-2">
                                            <div className="d-inline align-content-end">
                                                <a className="btn btn-primary m-1" href={`/edittask/${item.id}`}><span className="oi oi-pencil" /></a>
                                                <a className="btn btn-danger m-1"><span className="oi oi-trash" /></a>
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