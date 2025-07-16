import "./ActivityPages.css";

function ActivityPage() {
  return (
    <div className="activity-page">
      <header className="activity-header">
        <h1 className="activity-title">Notifications</h1>

        <div className="filter-bar">
          <select className="filter-select">
            <option>All</option>
            <option>Music</option>
            <option>Art & Culture</option>
            <option>Family-Friendly</option>
            <option>Nearby</option>
            <option>Saved Events</option>
          </select>
        </div>
      </header>

      <div className="notification-section">
        <div className="section-label">Today</div>

        
        <div className="notification-card">
          <img
            src="/MittVibe/assets/ActivityPictures/sunset_event.jpg"
            alt="Sunset Yoga"
            className="thumbnail"
          />
          <div className="notification-text">
            <p>Sunset Yoga at Tempelhofer Feld starts in 1 hour.</p>
            <button className="cta-button">View Event</button>
          </div>
        </div>

        <div className="notification-card">
          <img
            src="src/street food.jpg"
            alt="Street Food"
            className="thumbnail"
          />
          <div className="notification-text">
            <p>Street Food Sunday is happening now near you.</p>
            <button className="cta-button">View Event</button>
          </div>
        </div>

        <div className="notification-card">
          <img
            src="/MittVibe/assets/ActivityPictures/jazz_night.jpg"
            alt="Jazz Night"
            className="thumbnail"
          />
          <div className="notification-text">
            <p>Free Jazz Night at Mauerpark starts at 7pm.</p>
            <button className="cta-button">View Event</button>
          </div>
        </div>

        <div className="notification-card">
          <img
            src="/MittVibe/assets/ActivityPictures/romance_bookfair.jpg"
            alt="Book Fair"
            className="thumbnail"
          />
          <div className="notification-text">
            <p>Berlin Book Fair is open till 6pm at Kulturbrauerei.</p>
            <button className="cta-button">View Event</button>
          </div>
        </div>

        <div className="notification-card">
          <img
            src="src/open air cinema.jpg"
            alt="/MittVibe/assets/ActivityPictures/open_aircinema.jpg"
            className="thumbnail"
          />
          <div className="notification-text">
            <p>Tonight’s open air cinema: “Call Me by Your Name” at 9pm.</p>
            <button className="cta-button">View Event</button>
          </div>
        </div>

    
      </div>

      <div className="notification-card">
        <img src="src\assets\ActivityPictures\drag_show.jpg" alt="Drag Show" className="thumbnail" />
        <div className="notification-text">
          <p>Queer Drag Show tonight at SO36 — doors open at 8pm!</p>
          <button className="cta-button">View Event</button>
        </div>
      </div>
    </div>
  );
}

export default ActivityPage;
