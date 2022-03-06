import * as api from '../api/index.js';

export const signin = (formData, router) => {
  try {
    api.signIn(formData).then(
      res=>{
        console.log(res)
        localStorage.setItem('profile', JSON.stringify({ ...res.data,hasSignin:true }));
        
        router.push({
          name:'Home'
        })

      },
      err=>{
          console.log(err)
      }
    );
    // router.push('/');
  } catch (error) {
    console.log(error);
  }
};

export const signup = (formData, router) => {
  try {
    console.log(formData)
    api.signUp(formData).then(
      res=>{
        console.log(res)
        
        localStorage.setItem('profile', JSON.stringify({ ...res.data }))

      },
      err=>{
          console.log(err)
      }
    );
    // router.push({
    //   name:Posts
    // });
  } catch (error) {
    console.log(error);
  }
};
