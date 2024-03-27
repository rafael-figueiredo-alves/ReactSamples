import React from "react"
import { Link, NavLink } from "react-router-dom";

export function NavBar(){

    return(
     <>
            <nav className="navbar sticky-top bg-light ms-auto mb-2 mb-lg-0">
                <div className="container-fluid m-1 shadow">
                    <NavLink className="navbar-brand" to="/"><span className="oi oi-task" /> Simple To-DO App</NavLink>
                    <div className="d-flex justify-content-end">
                        <div className="m-1">
                            <NavLink className="btn btn-success d-none d-sm-inline" to="/newtask" style={{ width: '140px' }}><span className="oi oi-plus" />  Nova Tarefa</NavLink>
                            <NavLink className="btn btn-success d-sm-none rounded-circle" to="/newtask"><span className="oi oi-plus" /></NavLink>
                        </div>
                        <div className="m-1">
                            <NavLink className="btn btn-primary d-none d-sm-inline" to="/sobre" style={{ width: '140px' }}><span className="oi oi-question-mark" />  Sobre</NavLink>
                            <NavLink className="btn btn-primary d-sm-none rounded-circle" to="/sobre"><span className="oi oi-question-mark" /></NavLink>
                        </div>
                    </div>
                </div>
            </nav> 
     </>);

}

