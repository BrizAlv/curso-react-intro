import { useContext } from 'react';
import { createPortal } from 'react-dom';
import { TodoContext } from '../TodoContext';
import './Modal.css';

function Modal({ children }) {
    const { openModal, closeModal } = useContext(TodoContext);

    if (!openModal) return null;

    return createPortal(
        <div className="ModalBackground" onClick={closeModal}>
            <div className="ModalContainer" onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>,
        document.getElementById('modal')
    );
}

export { Modal };
