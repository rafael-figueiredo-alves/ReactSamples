import React from "react"
import { Link, NavLink } from "react-router-dom";

export function NavBar(){

    return(
     <>
            <nav className="navbar sticky-top bg-light ms-auto mb-2 mb-lg-0">
                <div className="container-fluid m-1 shadow">
                    <a className="navbar-brand" href="/"><span className="oi oi-task" /> Simple To-DO App</a>
                    <div className="d-flex justify-content-end">
                        <div className="m-1">
                            <a className="btn btn-success d-none d-sm-inline" href="/newtask" style={{ width: '140px' }}><span className="oi oi-plus" />  Nova Tarefa</a>
                            <a className="btn btn-success d-sm-none rounded-circle" href="/newtask"><span className="oi oi-plus" /></a>
                        </div>
                        <div className="m-1">
                            <a className="btn btn-primary d-none d-sm-inline" href="/sobre" style={{ width: '140px' }}><span className="oi oi-question-mark" />  Sobre</a>
                            <a className="btn btn-primary d-sm-none rounded-circle" href="/sobre"><span className="oi oi-question-mark" /></a>
                        </div>
                    </div>
                </div>
            </nav> 
     </>);

}

