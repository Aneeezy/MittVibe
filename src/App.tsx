import { Route, Switch, Link, useLocation } from "wouter";
import { useState } from "react";
import HomePage from "./pages/HomePage";
import ActivityPage from "./pages/ActivityPage.tsx";
import InboxPage from "./pages/InboxPage.tsx";
import MapPage from "./pages/MapPage.tsx";
import ProfilePage from "./pages/ProfilePage.tsx";
import UploadPage from "./pages/UploadPage.tsx";
import EditProfilePage from "./pages/EditProfilePage.tsx";
import PostPage from "./pages/PostPage.tsx";
import "./App.css";


function App() {
  const [location] = useLocation();
  const [userPosts, setUserPosts] = useState<any[]>([]);

  const isActive = (path: string) =>
    location === path ? "nav-btn active" : "nav-btn";

  const addUserPost = (newPost: any) => {
    setUserPosts((prev) => [newPost, ...prev]);
  };

  const deleteUserPost = (postId: number) => {
    setUserPosts((prev) => prev.filter((post) => post.id !== postId));
  };

  const updateUserPost = (updatedPost: any) => {
    setUserPosts((prev) =>
      prev.map((post) => (post.id === updatedPost.id ? updatedPost : post))
    );
  };

  const [profilePic, setProfilePic] = useState("src/assets/my_profilepic.jpg");
  const [bannerPic, setBannerPic] = useState(
    "src/assets/background_banner.jpg"
  );
  const [username, setUsername] = useState("Anissa");
  const [bio, setBio] = useState("Looking for cool events to go to :)");

  return (
    <div className="app">
      <div className="main-content">
        <Switch>
          <Route
            path="/"
            component={() => <HomePage userPosts={userPosts} />}
          />
          <Route
            path="/map"
            component={() => <MapPage userPosts={userPosts} />}
          />
          <Route path="/inbox" component={InboxPage} />
          <Route path="/activity" component={ActivityPage} />
          <Route
            path="/profile"
            component={() => (
              <ProfilePage
                userPosts={userPosts}
                profilePic={profilePic}
                bannerPic={bannerPic}
                onDeletePost={deleteUserPost}
                onUpdatePost={updateUserPost}
              />
            )}
          />
          <Route
            path="/upload"
            component={() => <UploadPage addUserPost={addUserPost} />}
          />
          <Route
            path="/post/:id"
            component={({ params }) => (
              <PostPage postId={params.id} userPosts={userPosts} />
            )}
          />
          <Route
            path="/edit-profile"
            component={() => (
              <EditProfilePage
                profilePic={profilePic}
                bannerPic={bannerPic}
                username={username}
                bio={bio}
                setProfilePic={setProfilePic}
                setBannerPic={setBannerPic}
                setUsername={setUsername}
                setBio={setBio}
              />
            )}
          />
        </Switch>
      </div>

      <nav className="bottom-nav">
        <Link href="/">
          <button className={isActive("/")} title="Home">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="icon-icon"
              viewBox="0 0 16 16"
            >
              <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z" />
              <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293z" />
            </svg>
          </button>
        </Link>

        <Link href="/map">
          <button className={isActive("/map")} title="Map">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="icon-icon"
              viewBox="0 0 16 16"
            >
              <path d="M15.5 8.516a7.5 7.5 0 1 1-9.462-7.24A1 1 0 0 1 7 0h2a1 1 0 0 1 .962 1.276 7.5 7.5 0 0 1 5.538 7.24m-3.61-3.905L6.94 7.439 4.11 12.39l4.95-2.828 2.828-4.95z" />
            </svg>
          </button>
        </Link>

        <Link href="/inbox">
          <button className={isActive("/inbox")} title="Inbox">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="icon-icon"
              viewBox="0 0 16 16"
            >
              <path d="M4.98 4a.5.5 0 0 0-.39.188L1.54 8H6a.5.5 0 0 1 .5.5 1.5 1.5 0 1 0 3 0A.5.5 0 0 1 10 8h4.46l-3.05-3.812A.5.5 0 0 0 11.02 4zm-1.17-.437A1.5 1.5 0 0 1 4.98 3h6.04a1.5 1.5 0 0 1 1.17.563l3.7 4.625a.5.5 0 0 1 .106.374l-.39 3.124A1.5 1.5 0 0 1 14.117 13H1.883a1.5 1.5 0 0 1-1.489-1.314l-.39-3.124a.5.5 0 0 1 .106-.374z" />
            </svg>
          </button>
        </Link>

        <Link href="/activity">
          <button className={isActive("/activity")} title="Activity">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="icon-icon"
              viewBox="0 0 16 16"
            >
              <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5 5 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901" />
            </svg>
          </button>
        </Link>

        <Link href="/profile">
          <button className={isActive("/profile")} title="Profile">
            <div className="icon-icon">
              <img
                src="src/assets/profile_icon.jpg"
                alt="Profile"
                className="profile-picture"
              />
            </div>
          </button>
        </Link>
      </nav>
    </div>
  );
}

export default App;
