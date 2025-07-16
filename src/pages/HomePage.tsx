import { useEffect, useState } from "react";
import { fetchPosts } from "../api";
import "./HomePages.css";
import AddPostButton from "../components/AddPostButton";
import { Link } from "wouter";

const defaultPosts = [
  {
    id: 1,
    username: "GreenQueen1997",
    time: "6h ago",
    content: "Did you know that aloe...",
    likes: 120,
    comments: 50,
    saves: 300000,
  },
  {
    id: 2,
    username: "PlantLover2023",
    time: "1d ago",
    content: "Gifts you can buy ahead...",
    likes: 200,
    comments: 80,
    saves: 50,
  },
  {
    id: 3,
    username: "GreenQueen1997",
    time: "6h ago",
    content: "Did you know that aloe vera helps purify the air?",
    likes: 120,
    comments: 50,
    saves: 30,
  },
  {
    id: 4,
    username: "PlantLover2023",
    time: "1d ago",
    content: "Gifts you can buy ahead of the next plant swap!",
    likes: 200,
    comments: 80,
    saves: 50,
  },
  {
    id: 5,
    username: "SucculentSoul",
    time: "2d ago",
    content: "Finally repotted my string of pearls. 🌿✨",
    likes: 150,
    comments: 40,
    saves: 20,
  },
  {
    id: 6,
    username: "UrbanJungleVibes",
    time: "3d ago",
    content: "Rainy days are perfect for leaf-washing 🪴💧",
    likes: 180,
    comments: 65,
    saves: 45,
  },
  {
    id: 7,
    username: "MossMuse",
    time: "4d ago",
    content: "Moss terrarium update: it's thriving 😍🌱",
    likes: 300,
    comments: 90,
    saves: 60,
  },
  {
    id: 68,
    username: "TheFernFriend",
    time: "5d ago",
    content: "Can anyone recommend low-light ferns? Need help!",
    likes: 90,
    comments: 30,
    saves: 10,
  },
];

type HomePageProps = {
  userPosts: any[];
};

const HomePage = ({ userPosts }: HomePageProps) => {
  const [fetchedPosts, setFetchedPosts] = useState<any[]>([]);

  useEffect(() => {
    const loadPosts = async () => {
      const backendPosts = await fetchPosts();
      setFetchedPosts(backendPosts.length ? backendPosts : defaultPosts);
    };
    loadPosts();
  }, []);

  const allPosts = [...userPosts, ...fetchedPosts];

  return (
    <div className="home-page">
      <div className="sticky-header">
        <h1 className="home-title">Home</h1>
        <div className="search-bar-container">
          <input type="text" placeholder="Search" className="search-input" />
        </div>
      </div>

      {allPosts.map((post) => (
        <Link href={`/post/${post.id}`} key={post.id}>
          <div className="post-card" style={{ cursor: "pointer" }}>
            <p>
              <strong>{post.username}</strong> · {post.time}
            </p>
            <p>{post.content}</p>

            
            {post.images && post.images.length > 0 && (
              <div className="post-image-container">
                {post.images.map((img: string, idx: number) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`attachment-${idx}`}
                    className="post-image"
                  />
                ))}
              </div>
            )}
            <div className="post-actions">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="homepage-icon"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
                  />
                </svg>
                {post.likes}
              </span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="homepage-icon"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.5a1 1 0 0 0-.8.4l-1.9 2.533a1 1 0 0 1-1.6 0L5.3 12.4a1 1 0 0 0-.8-.4H2a2 2 0 0 1-2-2zm3.5 1a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zm0 2.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zm0 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1z" />
                </svg>
                {post.comments}
              </span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="homepage-icon"
                  viewBox="0 0 16 16"
                >
                  <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2" />
                </svg>
                {post.saves}
              </span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="homepage-icon"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5" />
                </svg>
              </span>
            </div>
          </div>
        </Link>
      ))}
      <AddPostButton />
    </div>
  );
};

export default HomePage;
