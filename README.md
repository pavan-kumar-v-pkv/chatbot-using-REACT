# React Chatbot

A simple chatbot application built with React using CDN links. This project demonstrates basic React concepts including state management, component composition, and event handling in an interactive chat interface.

## Features

- **Real-time Chat Interface**: Interactive messaging system with user and bot responses
- **React Hooks**: Uses `useState` for state management and `useRef` with `useEffect` for DOM manipulation
- **Auto-scroll**: Automatically scrolls to the latest message in the chat
- **Responsive Design**: Clean, modern UI that works on different screen sizes
- **Pre-loaded Conversation**: Starts with example messages to demonstrate functionality
- **External Chatbot Integration**: Uses supersimpledev's chatbot library for intelligent responses

## Project Structure

```
6.2-chattbot/
├── chatbot.html          # Main application file with React components
├── robot.png            # Robot avatar image
├── user.png             # User avatar image
└── README.md            # Project documentation
```

## Technologies Used

- **React**: JavaScript library for building user interfaces
- **React DOM**: React package for DOM rendering
- **Babel**: JavaScript compiler for JSX transformation
- **supersimpledev libraries**: External CDN libraries for React and chatbot functionality

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, etc.)
- No additional installation required - all dependencies are loaded via CDN

### Running the Application

1. Clone or download this repository
2. Open `chatbot.html` in your web browser
3. Start chatting with the bot!

### Usage

1. Type your message in the input field at the bottom
2. Click the "Send" button or press Enter
3. The chatbot will respond automatically
4. The chat history will be preserved during your session

## Components

### `App`
- Root component that manages the overall chat state
- Initializes with sample conversation data
- Renders `ChatMessages` and `ChatInput` components

### `ChatMessages`
- Displays the conversation history
- Handles auto-scrolling to the latest message
- Maps through chat messages and renders individual `ChatMessage` components

### `ChatMessage`
- Renders individual messages with appropriate styling
- Displays different layouts for user vs robot messages
- Shows profile images for each sender type

### `ChatInput`
- Manages the message input field
- Handles sending new messages
- Integrates with the external chatbot for automated responses

## Styling

The application features a clean, modern design with:
- Responsive flex-based layout
- Rounded corners and subtle shadows
- Color-coded message bubbles
- Smooth scrolling chat container
- Professional color scheme

## External Dependencies

- `supersimpledev/react.js`: React library
- `supersimpledev/react-dom.js`: React DOM library
- `supersimpledev/chatbot.js`: Chatbot response logic
- `supersimpledev/babel.js`: JSX transformation

## Browser Compatibility

This application works in all modern browsers that support:
- ES6+ JavaScript features
- React 18+ functionality
- CSS Flexbox

## Future Enhancements

Potential improvements could include:
- Message timestamps
- Typing indicators
- Message persistence
- Custom themes
- File sharing capabilities
- Multiple chat rooms

## Contributing

This is a learning project. Feel free to fork and experiment with the code to enhance your React skills.

## License

This project is open source and available under the MIT License.