import React, { useEffect, useState } from "react";
import axios from "axios";

function Todo() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [limit, setLimit] = useState(10);

  useEffect(() => {
    const fetchTodos = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/todos"
        );
        setTodos(res.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchTodos();
  }, []);

  const handleLoadMore = () => {
    setLimit((prevLimit) => prevLimit + 10);
  };

  if (error)
    return <p style={styles.error}>Error fetching todos: {error.message}</p>;
  if (loading) return <p style={styles.loading}>Loading...</p>;

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Todo List</h1>
      <div style={styles.todoGrid}>
        {todos.slice(0, limit).map((todo) => (
          <div
            key={todo.id}
            style={{
              ...styles.todoCard,
              backgroundColor: todo.completed ? "#d1e7dd" : "#f8d7da",
              borderColor: todo.completed ? "#66f595ff" : "#ed2132ff",
            }}
          >
            <h3 style={styles.todoTitle}>{todo.title}</h3>
            <p style={styles.todoStatus}>
              Status:{" "}
              <span
                style={{
                  color: todo.completed ? "#0f5132" : "#842029",
                  fontWeight: "bold",
                }}
              >
                {todo.completed ? "Completed" : "Pending"}
              </span>
            </p>
          </div>
        ))}
      </div>
      {limit < todos.length && (
        <button style={styles.button} onClick={handleLoadMore}>
          Load More
        </button>
      )}
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: "#f5f7fa",
    minHeight: "100vh",
    padding: "2rem",
    fontFamily: "'Poppins', sans-serif",
  },
  title: {
    textAlign: "center",
    color: "#222",
    marginBottom: "2rem",
  },
  todoGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "1.5rem",
  },
  todoCard: {
    border: "2px outset",
    color: "black",
    borderRadius: "10px",
    padding: "1.5rem",
    boxShadow: "0 4px 8px rgba(7, 7, 7, 0.6)",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
    cursor: "pointer",
  },
  todoTitle: {
    fontSize: "1.1rem",
    marginBottom: "0.5rem",
  },
  todoStatus: {
    margin: 0,
    fontSize: "0.95rem",
  },
  loading: {
    textAlign: "center",
    marginTop: "2rem",
    fontSize: "1.2rem",
    color: "#555",
  },
  error: {
    textAlign: "center",
    marginTop: "2rem",
    fontSize: "1.2rem",
    color: "red",
  },
  button: {
    display: "block",
    margin: "2rem auto",
    padding: "0.75rem 1.5rem",
    backgroundColor: "#4ab330ff",
    color: "white",
    border: " 2px outset",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "1rem",
    transition: "background-color 0.3s ease",
  },
};

export default Todo;
