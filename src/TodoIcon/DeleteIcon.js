function DeleteIcon({ onClick }) {
  return (
    <span className="Icon Icon-delete" onClick={onClick} title="Eliminar">
      ❌
    </span>
  );
}

export { DeleteIcon };
