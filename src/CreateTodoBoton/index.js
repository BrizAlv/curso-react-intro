import './CreateTodoBotton.css';
import { useContext } from 'react';
import { TodoContext } from '../TodoContext';

function CreateTodoButton() {
    const { setOpenModal } = useContext(TodoContext);

    return (
        <button
            className="CreateTodoButton"
            type="button"
            onClick={() => setOpenModal(true)}
        >
            + Crear
        </button>
    );
}
export { CreateTodoButton };
