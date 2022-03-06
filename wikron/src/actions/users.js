import * as api from '../api/index.js';

export const getUser = async (id,history)=> {
    try {
      let res = await api.fetchUser(id)
      console.log(res)
      history.push({
        name:'Profile',
        params:{
          profile:res.data
        }
      })
    //   return res
    } catch (error) {
      console.log(error);
    }
  };

export const followUser = async (current,obj)=> {
  try {
    console.log(current,obj)
    let res = await api.followOther(current,obj)
    // console.log(res)
    
  //   return res
  } catch (error) {
    console.log(error);
  }
};

export const unfollowUser = async (current,obj)=> {
  try {
    console.log(current)
    console.log(obj)
    let res = await api.unfollowOther(current,obj)
    console.log(res)
    
  //   return res
  } catch (error) {
    console.log(error);
  }
};

export const getfriends = async (id,endi)=> {
  try {
    let res = await api.getFriends(id)
    console.log(res)
    return res.data
  //   return res
  } catch (error) {
    console.log(error);
  }
};