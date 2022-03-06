import * as api from '../api/index.js';

// export const getPost = (id) => async (dispatch) => {
//   try {
//     const { data } = await api.fetchPost(id);

//   } catch (error) {
//     console.log(error);
//   }
// };

export const getPosts = async ()=> {
  try {
    let res = await api.fetchPosts()
    return res
  } catch (error) {
    console.log(error);
  }
};

export const getPostsByUser = async (username)=> {
  try {
    let res = await api.fetchPostByUser(username)
    return res
    // console.log(res)
  } catch (error) {
    console.log(error);
  }
};


// export const getPostsBySearch = (searchQuery) => async (dispatch) => {
//   try {
//     const { data: { data } } = await api.fetchPostsBySearch(searchQuery);
//   } catch (error) {
//     console.log(error);
//   }
// };

export const createPost = async (post, history) => {
  try {
    const data  = await api.createPost(post);
    console.log(data)
    location.reload()
    // history.push(`/posts/${data._id}`);
  } catch (error) {
    console.log(error);
  }
};

// export const updatePost = (id, post) => async (dispatch) => {
//   try {
//     const { data } = await api.updatePost(id, post);

//     dispatch({ type: UPDATE, payload: data });
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const likePost = (id) => async (dispatch) => {
//   const user = JSON.parse(localStorage.getItem('profile'));

//   try {
//     const { data } = await api.likePost(id, user?.token);

//     dispatch({ type: LIKE, payload: data });
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const deletePost = (id) => async (dispatch) => {
//   try {
//     await await api.deletePost(id);

//     dispatch({ type: DELETE, payload: id });
//   } catch (error) {
//     console.log(error);
//   }
// };
