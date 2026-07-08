import './CreateTodoBotton.css';
import { useContext } from 'react';
import { TodoContext } from '../TodoContext';

function CreateTodoButton() {
    const { setOpenModal } = useContext(TodoContext);

    return (
        <button
            className="CreateTodoButton"
            type="button"
            aria-label="Crear tarea"
            onClick={() => setOpenModal(true)}
        >
            +
        </button>
    );
}
export { CreateTodoButton };
