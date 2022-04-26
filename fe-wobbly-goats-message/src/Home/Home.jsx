import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Container, Button } from 'react-bootstrap'
import { getRoom } from '../Utils/api'
const Home = () => {
  const [roomName, setRoomName] = useState([])
  const { rooms } = useParams()
  const [userName, setUserName] = useState('')

  const handleUserNameChange = (event) => {
    setUserName(event.target.value)
  }
  useEffect(() => {
    getRoom(rooms).then((roomsApi) => {
      setRoomName(roomsApi)
    })
  }, [rooms])
  return (
    <Container>
      <input
        type="text"
        placeholder="Name"
        value={userName}
        onChange={handleUserNameChange}
      />
      <Link to={`/${userName}`}>
        <Button>login</Button>
      </Link>
    </Container>
  )
}

export default Home
