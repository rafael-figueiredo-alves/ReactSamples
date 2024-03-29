import { SearchInput } from "../shared/SearchInput";
import { Paginacao } from "../shared/Paginacao";
import { Msg } from "../shared/Msg";
import { useContext, useEffect, useState } from "react";
import { TasksContext } from "../Context/TasksContext";
import { NavLink } from "react-router-dom";
//import { Tarefas } from "../services/Tarefas"

export const Home = () => {
    const { Tasks, RemoveTask, toggleTask } = useContext(TasksContext);

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
                    Tasks !== null && Tasks.length <= 0 ?
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
                                {Tasks.map((item) =>
                                    <tr key={item.id}>
                                        <td scope="col" className="col-1 align-middle"><input className="form-check-input" type="checkbox" id="flexCheckDefault" defaultChecked={item.feito} onChange={toggleTask(item)} /></td>
                                        <td className="col-3 align-middle">{item.tarefa}</td>
                                        <td className="d-none d-md-table-cell col-6 align-middle">{item.descricao}</td>
                                        <td className="col-2">
                                            <div className="d-inline align-content-end">
                                                <NavLink className="btn btn-primary m-1" to={`/edittask/${item.id}`}><span className="oi oi-pencil" /></NavLink>
                                                <a className="btn btn-danger m-1" onClick={RemoveTask(item.id)}><span className="oi oi-trash" /></a>
                                            </div>
                                        </td>
                                    </tr>

                                )}
                            </tbody>
                        </table >
            }
        </>
    )
};           

//    {/* <Msg /> */}

//     <Paginacao />
//     {/* <Paginacao QuantidadeTotalPaginas="QuantidadeTotalPaginas" paginaAtual="paginaAtual"
//         Raio="2" PaginaSelecionada="PaginaSelecionada" />         */}
//    </> 
//  );