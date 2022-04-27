import { useEffect, useRef, useState } from "react";
import io from "socket.io-client";
const API_URL = require("../config");

const SOCKET_SERVER_URL = API_URL;

const useChat = (username, roomId, avatar) => {
  const [messages, setMessages] = useState([]);
  const socketRef = useRef();

  useEffect(() => {
    socketRef.current = io(SOCKET_SERVER_URL, {
      transports: ["websocket"],
      query: { roomId },
    });

    socketRef.current.emit("join", {
      username: username,
      room_id: 1,
      avatar: avatar,
    });

    socketRef.current.on("message", (message) => {
      const incomingMessage = {
        user_id: message.user_id,
        avatar: message.avatar,
        username: message.username,
        text: message.text,
        ownedByCurrentUser: message.user_id === socketRef.current.id,
      };

      setMessages((messages) => [...messages, incomingMessage]);
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, [username, roomId, avatar]);

  const sendMessage = (message) => {
    socketRef.current.emit("sendMessage", message);
  };

  return { messages, sendMessage };
};

export default useChat;
