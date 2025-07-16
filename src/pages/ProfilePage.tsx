import { useState } from "react";
import "./ProfilePages.css";
import DeletePostButton from "../components/DeletePostButton";
import UpdatePostButton from "../components/UpdatePostButton";
import AddPostButton from "../components/AddPostButton";
import { useLocation } from "wouter";

type ProfilePageProps = {
  userPosts: any[];
  profilePic: string;
  bannerPic: string;
  onDeletePost: (postId: number) => void;
  onUpdatePost: (updatedPost: any) => void;
};

const ProfilePage = ({ userPosts, profilePic, bannerPic, onDeletePost, onUpdatePost }: ProfilePageProps) => {
  const [activeTab, setActiveTab] = useState("posts");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [, navigate] = useLocation();
  
  const bannerStyle = { backgroundImage: `url(${bannerPic})` };
  
  return (
    <div className="standard">
      <div className="page-content profile-page">
        <div
          className="profile-banner"
          style={bannerStyle}
        />

        <div className="profile-header">
          <img
            src={profilePic}
            alt="Profile"
            className="profile-pic"
            onClick={() => setIsModalOpen(true)}
          />
          <div className="profile-info">
            <h1 className="profile-name">Anissa</h1>
            <p className="profile-bio">Looking for cool events to go to :</p>
          </div>
        </div>

        <div className="profile-stats">
          <div>
            <strong>500</strong>
            <p>Followers</p>
          </div>
          <div>
            <strong>190</strong>
            <p>Following</p>
          </div>
          <div>
            <strong>{userPosts.length}</strong>
            <p>Posts</p>
          </div>
        </div>

        <div className="edit-profile-container">
          <button
            className="edit-profile-button"
            onClick={() => navigate("/edit-profile")}
          >
            Edit profile
          </button>
        </div>

        <div className="tabs">
          <div
            className={`tab ${activeTab === "posts" ? "active" : ""}`}
            onClick={() => setActiveTab("posts")}
          >
            Posts
          </div>
          <div
            className={`tab ${activeTab === "saved" ? "active" : ""}`}
            onClick={() => setActiveTab("saved")}
          >
            Saved
          </div>
        </div>

        <div className="underline-container">
          <div
            className="underline"
            style={{
              transform:
                activeTab === "posts" ? "translateX(0%)" : "translateX(100%)",
            }}
          />
        </div>

        <div className="scrollable-content">
          {activeTab === "posts" ? (
            userPosts.length === 0 ? (
              <p>No posts yet.</p>
            ) : (
              <div className="grid">
                {userPosts.map((post) => (
                  <div className="post-card" key={post.id}>
                    <p>
                      <strong>{post.username}</strong> · {post.time}
                    </p>
                    <p>{post.content}</p>
                    <DeletePostButton
                      postId={post.id}
                      onDelete={onDeletePost}
                    />
                    <UpdatePostButton post={post} onUpdate={onUpdatePost} />
                  </div>
                ))}
              </div>
            )
          ) : (
            <div className="grid">
              {[
                "src/assets/ActivityPictures/street_food.jpg",
                "src/assets/ActivityPictures/romance_bookfair.jpg",
                "src/assets/ActivityPictures/jazz_night.jpg",
                "src/assets/ActivityPictures/open_aircinema.jpg",
                "src/assets/ActivityPictures/nivea_event.jpg",
                "src/assets/ActivityPictures/pink_event.jpg",
              ].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`Saved ${i + 1}`}
                  className="grid-image"
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img
              src={profilePic}
              alt="Expanded Profile"
              className="modal-image"
            />
            <button
              className="close-button"
              onClick={() => setIsModalOpen(false)}
            >
              ×
            </button>
          </div>
        </div>
      )}

      <AddPostButton />
    </div>
  );
};

export default ProfilePage;
