function CompleteIcon({ completed, onClick }) {
  return (
    <span
      className={`Icon Icon-check ${completed ? 'Icon-check--active' : ''}`}
      onClick={onClick}
      title={completed ? 'Desmarcar' : 'Completar'}
    >
      ✔
    </span>
  );
}

export { CompleteIcon };
