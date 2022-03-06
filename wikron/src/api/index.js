import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    // console.log('token',localStorage.getItem('profile'))
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }
//   console.log(localStorage.getItem('profile'))
  return req;
});

export const fetchPost = (id) => API.get(`/posts/${id}`);
export const fetchPostByUser = (username) => API.get(`/posts/profile/${username}`);

// export const fetchPosts = (page) => API.get(`/posts?page=${page}`);
export const fetchPosts = () => API.get(`/posts/`);
export const fetchPostsBySearch = (searchQuery) => API.get(`/posts/search?searchQuery=${searchQuery.search || 'none'}&tags=${searchQuery.tags}`);
export const createPost = (newPost) => API.post('/posts/', newPost);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);

export const fetchUser = (id) => API.get(`/users?userId=${id}`);
export const followOther = (current,id) => API.put(`/users/${id}/follow`,current);
export const unfollowOther = (current,id) => API.put(`/users/${id}/unfollow`,current);
export const getFriends = (id) => API.get(`/users/friends/${id}`);



export const signIn = (formData) => API.post('/auth/login', formData);
export const signUp = (formData) => API.post('/auth/register', formData);
