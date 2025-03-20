import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="bg-black text-white p-4 shadow-md">
            <div className="container mx-auto flex justify-between">
                <h1 className="text-xl font-bold">Social Media Analytics</h1>
                <ul className="flex space-x-4">
                    <li><Link to="/" className="hover:underline">Home</Link></li>
                    <li><Link to="/topUsers" className="hover:underline">Top Users</Link></li>
                    <li><Link to="/trendingPosts" className="hover:underline">Trending Posts</Link></li>
                    <li><Link to="/feeds" className="hover:underline">Feeds</Link></li>
                </ul>
            </div>
        </nav>
    );
}
