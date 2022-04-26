import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./index.css";
import Home from "./Home/Home";
import ChatRoom from "./ChatRoom/ChatRoom";

const [username, setUsername] = useState("");

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" element={<Home setUsername={setUsername} />} />
        <Route
          exact
          path="/:roomId"
          element={<ChatRoom username={username} />}
        />
      </Switch>
    </Router>
  );
}

export default App;
