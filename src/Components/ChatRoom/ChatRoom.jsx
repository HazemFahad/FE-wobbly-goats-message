import { useState } from "react";
import { Container, Form, Card, Image } from "react-bootstrap";

import useChat from "../../hooks/useChat";

const ChatRoom = ({ username, roomId, avatar }) => {
  const { messages, sendMessage } = useChat(username, roomId);
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
            {messages.map((message, i) => (
              <>
                <Image
                  src={avatar}
                  roundedCircle
                  height={40}
                  width={40}
                ></Image>

                <p
                  key={i}
                  className={`message-item ${
                    message.ownedByCurrentUser ? "from-them" : "from-me"
                  }`}
                >
                  {message.username}: {message.text}
                </p>
              </>
            ))}
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
