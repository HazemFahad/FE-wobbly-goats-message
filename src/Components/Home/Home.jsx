import React from "react";
import { Link } from "react-router-dom";
import { Container, Form, Card } from "react-bootstrap";
import useRooms from "../../hooks/useRooms";

const Home = ({ setRoomId, setUsername, setAvatar }) => {
  const { rooms } = useRooms();

  const handleUserNameChange = (event) => {
    setUsername(event.target.value);
  };
  const handleRoomChange = (event) => {
    setRoomId(event.target.value);
  };
  const handleAvatarChange = (event) => {
    setAvatar(event.target.value);
  };

  return (
    <Container>
      <Card style={{ width: "28rem", margin: "auto" }} className="mt-5">
        <Card.Header className="bg-primary text-white">
          <Card.Title>Chat Login Page</Card.Title>
        </Card.Header>
        <Card.Body className="bg-light">
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Your username:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Name"
                onChange={handleUserNameChange}
              ></Form.Control>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Your avatar URL:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Avatar URL"
                onChange={handleAvatarChange}
              ></Form.Control>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Chat Room:</Form.Label>
              <Form.Select
                aria-label="Default select "
                onChange={handleRoomChange}
              >
                <option>Choose your room</option>
                {rooms.map((room) => {
                  return (
                    <option value={room.room_id} key={room.room_id}>
                      {room.name}
                    </option>
                  );
                })}
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Link to="/chat" className="btn btn-success">
                Login
              </Link>
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Home;
