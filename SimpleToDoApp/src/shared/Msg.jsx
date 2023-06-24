export const Msg = () => {
    return(
        <>
            <div className="modal-backdrop show"></div>

            <div className="modal" tabindex="-1" role="dialog"
                aria-hidden="true" style={{ display: 'block' }}>
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">@Titulo</h5>
                            <button type="button" className="close"
                                data-dismiss="modal" aria-label="Fechar">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            @ChildContent
                        </div>
                        <div class="modal-footer">
                            <button type="button" className="btn btn-danger"
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
    )
}