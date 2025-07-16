import React, { useState } from "react";
import "./UploadPages.css";
import { useLocation } from "wouter";

const mittweidaLocations = [
  "Mittenwalde",
  "Gallun",
  "Ragow",
  "Brusendorf",
  "Schenkendorf-Krummensee",
  "Telz",
  "Motzen",
  "Töpchin",
];

type UploadPageProps = {
  addUserPost: (post: any) => void;
};

const UploadPage = ({ addUserPost }: UploadPageProps) => {
  const [locationInput, setLocationInput] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
  const [base64Images, setBase64Images] = useState<string[]>([]);

  const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setLocationInput(value);
    setShowSuggestions(true);
    const matches = mittweidaLocations.filter((loc) =>
      loc.toLowerCase().startsWith(value.toLowerCase())
    );
    setFilteredSuggestions(matches);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setLocationInput(suggestion);
    setShowSuggestions(false);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const fileReaders: Promise<string>[] = [];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      fileReaders.push(
        new Promise((resolve) => {
          const reader = new FileReader();
          reader.onload = (event) => resolve(event.target?.result as string);
          reader.readAsDataURL(file);
        })
      );
    }

    Promise.all(fileReaders).then((images) => {
      // Save base64Images array in your post object as images
      setBase64Images(images);
    });
  };

  const [, navigate] = useLocation();
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  const handlePost = () => {
    if (!title.trim() && !details.trim()) return;

    const newPost = {
      id: Date.now(),
      username: "CurrentUser",
      time: "Just now",
      content: `${title}: ${details}`,
      images: base64Images, // <-- add images here
      location: locationInput,
    };

    addUserPost(newPost);
    setBase64Images([]); // clear after posting
    navigate("/");
  };

  return (
    <div className="upload-page">
      <h1 className="upload-title">What's Happening?</h1>

      <input
        type="text"
        className="input-title"
        placeholder="What's the title of event"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <div className="location-section">
        <p>Where's the event happening?</p>
        <div className="location-input-wrapper">
          <input
            type="text"
            value={locationInput}
            onChange={handleLocationChange}
            placeholder="Search Mittweida locations"
            className="location-input"
          />
          {showSuggestions && filteredSuggestions.length > 0 && (
            <ul className="suggestions-dropdown">
              {filteredSuggestions.map((suggestion, idx) => (
                <li key={idx} onClick={() => handleSuggestionClick(suggestion)}>
                  {suggestion}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <textarea
        className="description-textarea"
        placeholder="Drop the Deets!"
        rows={6}
        value={details}
        onChange={(e) => setDetails(e.target.value)}
      />

      <div className="post-btn-row">
        <button className="submit-button post-button" onClick={handlePost}>
          Post
        </button>
      </div>

      <div className="action-row">
        <button
          className="insert-button"
          onClick={() => document.getElementById("file-upload")?.click()}
          type="button"
        >
          📎
        </button>
      </div>
      <input
        type="file"
        id="file-upload"
        multiple
        onChange={handleFileChange}
        accept="image/*,video/*,application/pdf"
        style={{ display: "none" }}
      />

      {/* removed selectedFiles preview, not used */}
      {/* Render base64 images if available */}
      {base64Images.length > 0 && (
        <div className="file-preview">
          {base64Images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`preview-${idx}`}
              style={{ maxWidth: "100px", margin: "4px" }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default UploadPage;
