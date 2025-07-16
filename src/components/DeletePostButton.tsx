import "./AddPostButtons.css";

type DeletePostButtonProps = {
  postId: number;
  onDelete: (postId: number) => void;
};

const DeletePostButton: React.FC<DeletePostButtonProps> = ({
  postId,
  onDelete,
}) => (
  <button
    className="delete-post-button"
    onClick={() => onDelete(postId)}
    title="Delete Post"
    aria-label={`Delete post with ID ${postId}`}
  >
    Delete
  </button>
);

export default DeletePostButton;
