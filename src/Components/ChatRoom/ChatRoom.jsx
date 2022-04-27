import { useState } from "react";
import { Container, Form, Card, Image } from "react-bootstrap";

import useChat from "../../hooks/useChat";

const ChatRoom = ({ username, roomId, avatar }) => {
  const { messages, sendMessage } = useChat(username, roomId, avatar);
  const [newMessage, setNewMessage] = useState("");

  const handleNewMessageChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleSendMessage = () => {
    sendMessage(newMessage);
    setNewMessage("");
  };

  return (
    <Container>
      <Card className="mt-5">
        <Card.Header>
          <Card.Title className="room-name">
            Room: {roomId}, You logged in as {username}
          </Card.Title>
        </Card.Header>
        <Card.Body>
          <div className="imessage">
            {messages.map((message, i) => {
              console.log(message.username);
              console.log(message.text);
              console.log(message.avatar);

              return (
                <>
                  <p
                    key={i}
                    className={`message-item ${
                      message.ownedByCurrentUser ? "from-them" : "from-me"
                    }`}
                  >
                    <Image
                      className="avatar__img"
                      roundedCircle
                      src={message.avatar}
                    ></Image>
                    <b>{message.username}</b>: {message.text}
                  </p>
                </>
              );
            })}
          </div>
          <Form.Control
            as="textarea"
            rows={3}
            value={newMessage}
            onChange={handleNewMessageChange}
            placeholder="Write message..."
            className="new-message-input-field mt-3"
          ></Form.Control>
          <button
            onClick={handleSendMessage}
            className="btn btn-success send-message-button mt-2"
          >
            Send
          </button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ChatRoom;
