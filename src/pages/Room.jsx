// src/pages/Room.jsx
import React from "react";
import { useParams } from "react-router-dom";

function Room() {
  const { roomId } = useParams();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Welcome to Room</h2>
      <p>Room ID: {roomId}</p>
    </div>
  );
}

export default Room;
