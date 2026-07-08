import './CreateTodoBotton.css';
import { useState } from 'react';

function CreateTodoButton({ onAdd }) {
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim()) {
            onAdd(text.trim());
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
            />
            <button className="CreateTodoButton" type="submit">
                + Crear
            </button>
        </form>
    );
}
export { CreateTodoButton };