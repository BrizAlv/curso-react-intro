import './KanbanBoard.css';

function KanbanColumn({ title, children, className }) {
    return (
        <div className={`KanbanColumn ${className || ''}`}>
            <h2 className="KanbanColumn-title">{title}</h2>
            <div className="KanbanColumn-content">
                {children}
            </div>
        </div>
    );
}

function KanbanBoard({ children }) {
    return (
        <div className="KanbanBoard">
            {children}
        </div>
    );
}

export { KanbanBoard, KanbanColumn };
