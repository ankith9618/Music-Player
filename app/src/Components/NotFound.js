import React from "react";

const NotFound = ({ message = "No Songs Found" }) => {
    return (
        <div style={styles.card}>
            <div style={styles.icon}>🎵</div>
            <p style={styles.message}>{message}</p>
        </div>
    );
};

const styles = {
    card: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(36, 197, 71, 0.85)",
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "20px",
        maxWidth: "300px",
        margin: "auto",
        boxShadow: "0px 0px 15px 8px rgba(14, 174, 59, 0.82)",
    },
    icon: {
        fontSize: "40px",
        marginBottom: "10px",
        color: "#999",
    },
    message: {
        fontSize: "18px",
        color: "#555",
        textAlign: "center",
    },
};

export default NotFound;
