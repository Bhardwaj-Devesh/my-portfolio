const ChatbotWidget = () => {
  return (
    <iframe
      src="https://personal-persona-chatbot.vercel.app/"
      title="Devesh Chatbot"
      allowTransparency={true}
      style={{
        backgroundColor: "transparent",
        position: "fixed",
        bottom: 0,
        right: 0,
        border: "none",
        zIndex: 999,
        width: "520px",
        height: "620px"
      }}
    />
  );
};

export default ChatbotWidget; 