export const About = () => {
    return(
        <>
            <div className="card">
                <img className="card-img-top" src="./images/Sobre_banner.png" alt="Imagem de capa do card" />
                <div className="card-body">
                    <h5 className="card-title"><strong>Simple To-DO App</strong></h5>
                    <p className="card-text">Versão 1.0 - Desenvolvido por <a href="https://github.com/rafael-figueiredo-alves" target="_blank">Rafael de Figueiredo Alves</a></p>
                    <p className="card-text">Este app foi desenvolvido para executar testes e aprender mais sobre o uso do Blazor e do C#.</p>
                    <p className="card-text">© Cópia autorizada {new Date().getFullYear()}.</p> 
                    <p className="text-end"><a className="btn btn-primary" href="/" style={{ width: '125px' }}><span className="oi oi-chevron-left" /> Voltar</a></p>
                </div>
            </div>        
        </>
    )
}