import { useState, useEffect } from "react";
import axios from "axios";

export default function FeedsPage() {
  const [feeds, setFeeds] = useState([]);

  useEffect(() => {
    const fetchFeeds = async () => {
      try {
        const { data } = await axios.get("http://20.244.56.144/test/feeds");
        setFeeds(data);
      } catch (error) {
        console.error("Error fetching feeds:", error);
        setFeeds([
          { id: 1, user: "Alice", content: "Hello world!", time: "2 min ago" },
          { id: 2, user: "Bob", content: "Just had coffee ☕", time: "5 min ago" },
          { id: 3, user: "Charlie", content: "Good morning everyone!", time: "10 min ago" },
        ]);
      }
    };

    fetchFeeds();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-violet-400">Live Feeds</h1>
      <ul>
        {feeds.map((feed) => (
          <li key={feed.id} className="border p-3 my-2 bg-white shadow-md">
            <strong>{feed.user}</strong>: {feed.content} <span className="text-gray-500">({feed.time})</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
