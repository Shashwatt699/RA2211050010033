import axios from 'axios';

export const getTopUsers = async () => {
  const usersResponse = await axios.get('http://test-server/users');
  const postsResponse = await axios.get('http://test-server/posts');

  const userPostCount = {};
  postsResponse.data.forEach(post => {
    userPostCount[post.userid] = (userPostCount[post.userid] || 0) + 1;
  });

  const topUsers = Object.entries(usersResponse.data.users)
    .map(([id, name]) => ({ id, name, count: userPostCount[id] || 0 }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 5);

  return topUsers;
};