import { useState } from "react";
import { useLocation } from "wouter";
import "./ProfilePages.css";

type EditProfilePageProps = {
  profilePic: string;
  bannerPic: string;
  username: string;
  bio: string;
  setProfilePic: (url: string) => void;
  setBannerPic: (url: string) => void;
  setUsername: (val: string) => void;
  setBio: (val: string) => void;
};

const EditProfilePage = ({
  profilePic,
  bannerPic,
  username,
  bio,
  setProfilePic,
  setBannerPic,
  setUsername,
  setBio,
}: EditProfilePageProps) => {
  const [, navigate] = useLocation();
  const [newUsername, setNewUsername] = useState(username);
  const [newBio, setNewBio] = useState(bio);

  const handleFileUpload = (
    e: React.ChangeEvent<HTMLInputElement>,
    setter: (val: string) => void
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setter(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    setUsername(newUsername);
    setBio(newBio);
    navigate("/profile");
  };

  return (
    <div className="standard">
      <div className="page-content profile-page">
        <h1 className="profile-name">Edit Profile</h1>

        <label className="form-label">Username</label>
        <input
          type="text"
          value={newUsername}
          onChange={(e) => setNewUsername(e.target.value)}
          className="upload-input"
        />

        <label className="form-label">Bio</label>
        <textarea
          value={newBio}
          onChange={(e) => setNewBio(e.target.value)}
          className="upload-textarea"
        />

        <label className="form-label">New Profile Picture</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => handleFileUpload(e, setProfilePic)}
        />

        <label className="form-label">New Banner Picture</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => handleFileUpload(e, setBannerPic)}
        />
      </div>

      <div className="bottom-fixed-button">
        <button className="submit-button" onClick={handleSave}>
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default EditProfilePage;
