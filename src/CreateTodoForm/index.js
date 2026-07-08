import { useState, useContext } from 'react';
import { TodoContext } from '../TodoContext';
import './CreateTodoForm.css';

function CreateTodoForm() {
    const { createTodo, closeModal } = useContext(TodoContext);
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim()) {
            createTodo(text.trim());
            setText('');
        }
    };

    return (
        <form className="CreateTodoForm" onSubmit={handleSubmit}>
            <input
                className="CreateTodoForm-input"
                type="text"
                placeholder="Nueva tarea..."
                value={text}
                onChange={(e) => setText(e.target.value)}
                autoFocus
            />
            <div className="CreateTodoForm-actions">
                <button
                    type="button"
                    className="CreateTodoForm-cancel"
                    onClick={closeModal}
                >
                    Cancelar
                </button>
                <button className="CreateTodoButton" type="submit">
                    + Crear
                </button>
            </div>
        </form>
    );
}

export { CreateTodoForm };
