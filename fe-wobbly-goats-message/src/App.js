import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./Home/Home";
import ChatRoom from "./ChatRoom/ChatRoom";

function App() {
  const [username, setUsername] = useState("");
  return (
    <Routes>
      <Route exact path="/" element={<Home setUsername={setUsername} />} />
      <Route exact path="/:roomId" element={<ChatRoom username={username} />} />
    </Routes>
  );
}

export default App;
