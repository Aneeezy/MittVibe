import { Link } from "wouter";
import "./AddPostButtons.css";

const AddPostButton = () => {
  return (
    <Link href="/upload">
      <button className="compose-button" title="Compose">
        +
      </button>
    </Link>
  );
};

export default AddPostButton;
