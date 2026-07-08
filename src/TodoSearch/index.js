import React from 'react';
import './TodoSearch.css';

function TodoSearch({
    searchValue,
    setSearchValue
}) {
    return (
        <div className="TodoSearch-container">
            <input
                className="TodoSearch"
                placeholder="Buscar tarea..."
                value={searchValue}
                onChange={(event) => {
                    setSearchValue(event.target.value);
                }}
            />
            <button className="TodoSearch-button" type="button">
                🔍
            </button>
        </div>
    );
}
export { TodoSearch }