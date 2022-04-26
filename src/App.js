import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./Components/Home/Home";
import ChatRoom from "./Components/ChatRoom/ChatRoom";

function App() {
  const [username, setUsername] = useState("");
  const [roomId, setRoomId] = useState("");

  return (
    <Routes>
      <Route
        exact
        path="/"
        element={<Home setUsername={setUsername} setRoomId={setRoomId} />}
      />
      <Route
        exact
        path="/chat"
        element={<ChatRoom username={username} roomId={roomId} />}
      />
    </Routes>
  );
}

export default App;
