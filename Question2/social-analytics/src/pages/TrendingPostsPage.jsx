import { useState, useEffect } from "react";
import axios from "axios";

export default function TrendingPostsPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchTrendingPosts = async () => {
      try {
        const { data } = await axios.get("http://20.244.56.144/test/trendingPosts");
        setPosts(data);
      } catch (error) {
        console.error("Error fetching trending posts:", error);
        setPosts([
          { id: 1, content: "Post A", comments: 120 },
          { id: 2, content: "Post B", comments: 100 },
          { id: 3, content: "Post C", comments: 95 },
        ]);
      }
    };

    fetchTrendingPosts();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-amber-100">Trending Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id} className="border p-3 my-2 font-serif bg-pink-400 shadow-md">
            {post.content} - {post.comments} comments
          </li>
        ))}
      </ul>
    </div>
  );
}
