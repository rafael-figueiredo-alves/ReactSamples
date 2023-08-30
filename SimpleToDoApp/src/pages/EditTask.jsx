import { useParams } from 'react-router-dom';
import { Formulario } from '../shared/Formulario';

export const EditTask = (props) => {
    const {id} = useParams();
    return(
        <>
        <h3>Editando Tarefa - {id}</h3>

        <Formulario />
        </>
    )
}