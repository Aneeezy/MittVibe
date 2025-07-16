
import axios from "axios";
const API_BASE = import.meta.env.VITE_API_BASE;

export async function fetchPosts() {
  try {
    const res = await fetch(`${API_BASE}/api/posts`);
    if (!res.ok) return [];
    return await res.json();
  } catch {
    return [];
  }
}

export const createPost = async (post: any) => {
  try {
    const response = await axios.post(`${API_BASE}/api/posts`, post);
    return response.data;
  } catch (err) {
    console.error("Error creating post:", err);
    return null;
  }
};
