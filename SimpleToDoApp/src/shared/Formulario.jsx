import { useState } from "react"

export const Formulario = (props) => {
    const [QtdCaracteres, SetQtdCaracteres] = useState(0); 
    return(
        <>

            <div className="form-group">
                <label form="Tarefa">Tarefa: </label>
                <div>
                    <input type="text" className="form-control" />
                </div>
            </div>

            <div className="form-group">
                <label form="Tarefa">Descrição: </label>
                <div>
                    <textarea className="form-control" onInput={(e) => SetQtdCaracteres(e.target.value.length)} maxLength="250" />
                    <small id="edescricaoHelp" className="form-text text-muted">{QtdCaracteres} / 250 caracteres digitados.</small>
                </div>
            </div>

            <br />
            <div className="text-end">
                <div className="d-flex justify-content-end">
                    <div className="m-1">
                        <button className="btn btn-danger" style={{ width: '100px', padding: '10px' }}>
                            Cancelar
                        </button>
                    </div>
                    <div className="m-1">
                        <button type="submit" className="btn btn-success" style={{ width: '100px', padding: '10px' }}>
                            Salvar
                        </button>
                    </div>
                </div>
            </div>

        </>
    )
}