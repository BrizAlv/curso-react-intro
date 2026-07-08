import { createContext, useState } from 'react';

const TodoContext = createContext();

function TodoProvider({ children, addTodo }) {
    const [openModal, setOpenModal] = useState(false);

    const closeModal = () => setOpenModal(false);

    const createTodo = (text) => {
        addTodo(text);
        closeModal();
    };

    return (
        <TodoContext.Provider value={{ openModal, setOpenModal, closeModal, createTodo }}>
            {children}
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider };
