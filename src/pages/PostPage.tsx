type PostPageProps = {
  postId: string;
  userPosts: any[];
};

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

const PostPage: React.FC<PostPageProps> = ({ postId, userPosts }) => {
  const allPosts = [...userPosts, ...defaultPosts];
  const post = allPosts.find((p) => String(p.id) === String(postId));

  if (!post) return <div>Post not found.</div>;

  return (
    <div className="post-page">
      <h1>Event Details</h1>
      <p>
        <strong>{post.username}</strong> · {post.time}
      </p>
      <p>{post.content}</p>
      {/* No images for default posts */}
      {/* No location for default posts */}
    </div>
  );
};

export default PostPage;
