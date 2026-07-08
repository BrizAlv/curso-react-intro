import './Loading.css';

function LoadingSpinner() {
    return (
        <div className="LoadingSpinner">
            <span className="LoadingSpinner-icon" />
        </div>
    );
}

function TodoItemSkeleton() {
    return (
        <li className="TodoItem-skeleton">
            <span className="Skeleton-circle" />
            <span className="Skeleton-text" />
        </li>
    );
}

export { LoadingSpinner, TodoItemSkeleton };
