import './TodoItem.css';
import { TodoIcon } from '../TodoIcon';

function TodoItem(props) {
  return (
    <li className="TodoItem">
      {props.onComplete && (
        <TodoIcon type="check" completed={props.completed} onClick={props.onComplete} />
      )}
      <p className={`TodoItem-p ${props.completed ? 'TodoItem-p--complete' : ''}`}>
        {props.text}
      </p>
      {props.onDelete && (
        <TodoIcon type="delete" onClick={props.onDelete} />
      )}
    </li>
  );
}
export { TodoItem };