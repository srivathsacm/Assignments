import React from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token"); 
    navigate("/login"); 
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome to Dashboard 🚀</h1>
      <p>You are successfully logged in.</p>

      <button style={styles.button} onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

const styles = {
  container: {
    padding: "40px",
    textAlign: "center"
  },

  heading: {
    marginBottom: "15px"
  },

  button: {
    marginTop: "20px",
    padding: "10px 20px",
    border: "none",
    background: "#4f46e5",
    color: "white",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "16px"
  }
};

export default Dashboard;
