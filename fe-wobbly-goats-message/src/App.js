import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './Home/Home'
import ChatRoom from './ChatRoom/ChatRoom'

function App() {
  const [username, setUsername] = React.useState('')
  return (
    <Router>
      <Route exact path="/" element={<Home setUsername={setUsername} />} />
      <Route exact path="/:roomId" element={<ChatRoom username={username} />} />
    </Router>
  )
}

export default App
