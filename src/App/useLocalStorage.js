import { useState, useEffect } from 'react';

function useLocalStorage(key, initialValue) {
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      try {
        const saved = localStorage.getItem(key);
        setState(saved ? JSON.parse(saved) : initialValue);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }, 1500);
  }, [key]);

  useEffect(() => {
    if (loading) return;
    try {
      localStorage.setItem(key, JSON.stringify(state));
    } catch (err) {
      setError(true);
    }
  }, [key, state, loading]);

  return [state, setState, loading, error];
}

export { useLocalStorage };
