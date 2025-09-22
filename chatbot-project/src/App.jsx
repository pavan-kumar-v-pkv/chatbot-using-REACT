import { useState } from "react";
import { ChatInput } from "./components/ChatInput";
import ChatMessages from "./components/ChatMessages";
import "./App.css";

function App() {
  const [chatMessages, setChatMessages] = useState([
    { id: 1, message: "hello chatbot", sender: "user" },
    { id: 2, message: "Hello, how can I help you?", sender: "robot" },
    { id: 3, message: "I want to know more about React.", sender: "user" },
    {
      id: 4,
      message: "React is a JavaScript library for building user interfaces.",
      sender: "robot",
    },
  ]);
  // const [chatMessages, setChatMessages] = array;
  // const chatMessages = array[0];
  // const setChatMessages = array[1];

  return (
    <div className="app-container">
      <ChatMessages chatMessages={chatMessages} />
      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
    </div>
  );
}

export default App;
