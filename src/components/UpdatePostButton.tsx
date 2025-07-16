import React, { useState } from "react";


type UpdatePostButtonProps = {
  post: any;
  onUpdate: (updatedPost: any) => void;
};

const UpdatePostButton: React.FC<UpdatePostButtonProps> = ({
  post,
  onUpdate,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState(post.title || "");
  const [details, setDetails] = useState(post.content || "");
  const [location, setLocation] = useState(post.location || "");

  const handleUpdate = () => {
    onUpdate({
      ...post,
      title,
      content: details,
      location,
    });
    setShowModal(false);
  };

  return (
    <>
      <button
        className="update-post-button"
        onClick={() => setShowModal(true)}
        style={{
          background: "#1890ff",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          padding: "4px 8px",
          cursor: "pointer",
          marginLeft: "8px",
        }}
      >
        Update
      </button>
      {showModal && (
        <div
          className="modal-backdrop"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.3)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 999,
          }}
        >
          <div
            className="modal-content"
            style={{
              background: "#fff",
              padding: 24,
              borderRadius: 8,
              minWidth: 300,
              maxWidth: 400,
            }}
          >
            <h3>Update Post</h3>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
              style={{ width: "100%", marginBottom: 8, padding: 6 }}
            />
            <textarea
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              placeholder="Details"
              rows={4}
              style={{ width: "100%", marginBottom: 8, padding: 6 }}
            />
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Location"
              style={{ width: "100%", marginBottom: 8, padding: 6 }}
            />
            <div
              style={{ display: "flex", justifyContent: "flex-end", gap: 8 }}
            >
              <button onClick={() => setShowModal(false)}>Cancel</button>
              <button
                onClick={handleUpdate}
                style={{
                  background: "#1890ff",
                  color: "#fff",
                  border: "none",
                  borderRadius: 4,
                  padding: "4px 12px",
                }}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UpdatePostButton;
