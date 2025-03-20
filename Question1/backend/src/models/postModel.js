import axios from 'axios';

export const getLatestPosts = async () => {
  const postsResponse = await axios.get('http://test-server/posts');
  const sortedPosts = postsResponse.data.sort((a, b) => b.timestamp - a.timestamp);
  return sortedPosts.slice(0, 5);
};

export const getPopularPosts = async () => {
  const postsResponse = await axios.get('http://test-server/posts');
  const postPromises = postsResponse.data.map(post =>
    axios.get(`http://test-server/posts/${post.id}/comments`)
  );
  const commentsData = await Promise.all(postPromises);

  const postCommentCounts = commentsData.map((response, index) => ({
    post: postsResponse.data[index],
    count: response.data.comments.length,
  }));

  const maxCount = Math.max(...postCommentCounts.map(p => p.count));
  const popularPosts = postCommentCounts
    .filter(p => p.count === maxCount)
    .map(p => p.post);

  return popularPosts;
};