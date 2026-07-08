import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoBoton';
import { CreateTodoForm } from '../CreateTodoForm';
import { Modal } from '../Modal';
import { KanbanBoard, KanbanColumn } from '../KanbanBoard';
import { BackgroundSelector, bg1 } from '../BackgroundSelector';
import { TodoItemSkeleton } from '../Loading';

function AppUI({
    loading,
    error,
    pendingTodos = [],
    completedTodos = [],
    searchValue = '',
    setSearchValue,
    deleteTodo,
    toggleComplete,
    background = bg1,
    setBackground
}) {

    return (
        <>
            <div
                className="App-background"
                style={{ backgroundImage: `url(${background})` }}
            />
            <TodoCounter
                loading={loading}
                error={error}
                completed={completedTodos.length}
                total={pendingTodos.length + completedTodos.length}
            />
            <TodoSearch
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />
            <BackgroundSelector selected={background} onSelect={setBackground} />

            <KanbanBoard>
                <KanbanColumn title="Crear" className="KanbanColumn--create">
                    <CreateTodoButton />
                </KanbanColumn>

                <KanbanColumn title="Pendientes" className="KanbanColumn--pending">
                    <TodoList>
                        {loading ? (
                            <>
                                <TodoItemSkeleton />
                                <TodoItemSkeleton />
                                <TodoItemSkeleton />
                            </>
                        ) : (
                            pendingTodos.map(todo => (
                                <TodoItem
                                    key={todo.text}
                                    text={todo.text}
                                    completed={todo.completed}
                                    onComplete={() => toggleComplete(todo.text)}
                                    onDelete={() => deleteTodo(todo.text)}
                                />
                            ))
                        )}
                    </TodoList>
                </KanbanColumn>

                <KanbanColumn title="Completadas" className="KanbanColumn--completed">
                    <TodoList>
                        {loading ? (
                            <>
                                <TodoItemSkeleton />
                                <TodoItemSkeleton />
                            </>
                        ) : (
                            completedTodos.map(todo => (
                                <TodoItem
                                    key={todo.text}
                                    text={todo.text}
                                    completed={todo.completed}
                                    onComplete={() => toggleComplete(todo.text)}
                                    onDelete={() => deleteTodo(todo.text)}
                                />
                            ))
                        )}
                    </TodoList>
                </KanbanColumn>
            </KanbanBoard>

            <Modal>
                <CreateTodoForm />
            </Modal>
        </>
    )
}

export { AppUI };
