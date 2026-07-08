import './TodoCounter.css';
import { LoadingSpinner } from '../Loading';

function TodoCounter({ total, completed, loading, error }) {
    return (
        <>
            {loading ? (
                <LoadingSpinner />
            ) : error ? (
                <h1>Ha ocurrido un error al cargar las tareas</h1>
            ) : total === 0 ? (
                <h1>¡No hay tareas aún! Crea tu primera tarea y comienza a ser productivo</h1>
            ) : total === completed ? (
                <h1>¡Que eficiencia! Has completado todas las tareas programadas</h1>
            ) : (
                <h1>Haz completado <span className="TodoCounter-bold">{completed}</span> de <span className="TodoCounter-bold">{total}</span> tareas</h1>
            )}
        </>
    )
}
export { TodoCounter }