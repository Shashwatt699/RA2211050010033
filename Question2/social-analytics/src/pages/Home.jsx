import { useState, useEffect } from "react";
import axios from "axios";

export default function Home() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    const fetchHomeData = async () => {
      try {
        const { data } = await axios.get("http://20.244.56.144/test/home");
        setMessage(data.message);
      } catch (error) {
        console.error("Error fetching home data:", error);
        setMessage("Welcome to Social Media Analytics!");
      }
    };

    fetchHomeData();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-cyan-600">{message}</h1>
    </div>
  );
}
