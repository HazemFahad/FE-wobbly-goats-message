import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Card } from 'react-bootstrap'

const Home = () => {
  const [userName, setUserName] = React.useState('')

  const handleUserNameChange = (event) => {
    setUserName(event.target.value)
  }
  return (
    <Container>
      <input
        type="text"
        placeholder="Name"
        value={userName}
        onChange={handleUserNameChange}
      />
      <Link to={`/${userName}`}>Login</Link>
    </Container>
  )
}

export default Home