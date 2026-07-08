import { CompleteIcon } from './CompleteIcon';
import { DeleteIcon } from './DeleteIcon';

function TodoIcon({ type, completed, onClick }) {
  if (type === 'check') {
    return <CompleteIcon completed={completed} onClick={onClick} />;
  }

  if (type === 'delete') {
    return <DeleteIcon onClick={onClick} />;
  }

  return null;
}

export { TodoIcon };
