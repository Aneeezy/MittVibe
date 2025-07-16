import "./InboxPages.css";

function InboxPage() {
  return (
    <div className="inbox-page">
      <div className="inbox-header">
        <h1 className="inbox-title">Inbox</h1>

        <div className="search-bar-container">
          <input type="text" placeholder="Search" className="search-input" />
        </div>
      </div>

      <div className="message-list">
        
        {[
         {
            user: "anissa.rv",
            message: "I just got your message!",
            time: "2:15 PM",
            unread: true,
          },
          {
            user: "sofya.luv",
            message: "Are we still on for later?",
            time: "1:02 PM",
            unread: true,
          },
          {
            user: "carla_codes",
            message: "Here's the repo link 💻",
            time: "11:07 AM",
            unread: true,
          },
          {
            user: "marie.bloom",
            message: "That sounds beautiful ✨",
            time: "07:55 AM",
            unread: false,
          },
          {
            user: "toribby",
            message: "Let me know when you’re free",
            time: "07:55 AM",
            unread: false,
          },
          {
            user: "remy.noir",
            message: "Sent a voice note 🎤",
            time: "05:33 AM",
            unread: false,
          },
          {
            user: "kojo_k",
            message: "Cool cool cool 😂",
            time: "05:33 AM",
            unread: false,
          },
          {
            user: "carla_codes",
            message: "Here's the repo link 💻",
            time: "05:33 AM",
            unread: true,
          },
          {
            user: "marie.bloom",
            message: "That sounds beautiful ✨",
            time: "Yesterday",
            unread: false,
          },
          {
            user: "toribby",
            message: "Let me know when you’re free",
            time: "Yesterday",
            unread: false,
          },
          {
            user: "remy.noir",
            message: "Sent a voice note 🎤",
            time: "Sat",
            unread: false,
          },
          {
            user: "kojo_k",
            message: "Cool cool cool 😂",
            time: "Sat",
            unread: false,
          },
        ].map((chat, index) => (
          <div
            key={index}
            className={`message-preview ${chat.unread ? "unread" : ""}`}
          >
            <img
              src="src/assets/profile_pic.jpg"
              alt={`${chat.user}'s profile`}
              className="chat-pfp"
            />
            <div className="chat-info">
              <div className="chat-header">
                <span className="chat-user">{chat.user}</span>
                <span className="chat-time">{chat.time}</span>
              </div>
              <div className="chat-message">
                {chat.message}
                {chat.unread && <span className="unread-dot" />}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default InboxPage;
