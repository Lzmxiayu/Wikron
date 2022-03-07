import * as api from '../api/index.js';

export const signin = async (formData, router) => {
  try {
    let res = await api.signIn(formData);
    console.log(res)
    await localStorage.setItem('profile', JSON.stringify({ ...res.data,hasSignin:true }));

    await router.push({
            name:'Home'
          })
    // api.signIn(formData).then(
    //   res=>{
    //     console.log(res)
    //     localStorage.setItem('profile', JSON.stringify({ ...res.data,hasSignin:true }));
        
    //     router.push({
    //       name:'Home'
    //     })

    //   },
    //   err=>{
    //       console.log(err)
    //   }
    // );
  } catch (error) {
    console.log(error);
  }
};

export const signup = async (formData, router) => {
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
