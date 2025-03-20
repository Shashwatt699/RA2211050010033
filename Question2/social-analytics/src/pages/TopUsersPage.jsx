import { useState, useEffect } from "react";
import axios from "axios";

export default function TopUsersPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchTopUsers = async () => {
      try {
        const { data } = await axios.get("http://20.244.56.144/test/topUsers");
        setUsers(data);
      } catch (error) {
        console.error("Error fetching top users:", error);
        setUsers([
          { id: 1, name: "Alice", posts: 50 },
          { id: 2, name: "Bob", posts: 45 },
          { id: 3, name: "Charlie", posts: 40 },
          { id: 4, name: "David", posts: 38 },
          { id: 5, name: "Eve", posts: 35 },
        ]);
      }
    };

    fetchTopUsers();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-blue-400">Top Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id} className="border p-3 my-2 bg-emerald-300 font-serif shadow-md">
            {user.name} - {user.posts} posts
          </li>
        ))}
      </ul>
    </div>
  );
}
