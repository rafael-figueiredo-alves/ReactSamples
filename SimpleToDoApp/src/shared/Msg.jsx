import { useState } from "react"

export const Msg = (props) => {
    const [Exibir, SetExibir] = useState(true);
    return(
        <>
        { Exibir == true ?
         <>
            <div className="modal-backdrop show"></div>

            <div className="modal" tabindex="-1" role="dialog"
                aria-hidden="true" style={{ display: 'block' }}>
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">{props.Titulo}</h5>
                            <button onClick={() => SetExibir(false)} type="button" className="btn-close"
                                data-dismiss="modal" aria-label="Fechar">
                                <span aria-hidden="true"></span>
                            </button>
                        </div>
                        <div class="modal-body">
                            {props.children}
                        </div>
                        <div class="modal-footer">
                            <button type="button" className="btn btn-danger" onClick={() => SetExibir(false)}
                                data-dismiss="modal">
                                Não
                            </button>
                            <button type="button"
                                className="btn btn-success">
                                Sim
                            </button>
                        </div>
                    </div >
                </div >
            </div >
            </>
            :
            <>
            </>        
        }
        </>
    )
}