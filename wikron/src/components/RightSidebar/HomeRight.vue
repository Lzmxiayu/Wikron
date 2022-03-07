<template>
  <div id="homeright">
    <div class="PerContainer">
        <img class="PersonImg" src="../../assets/1.jpg" alt="" />
    </div>
     <div class="PersIntro">
          <span class="Pername" @click="PushProfile">
            <b>{{currenUser.username}}</b> 
          </span>
          <span class="Persondesc">
              {{currenUser.desc}}
          </span>
        </div>
    
        <img class="rightbarAd" src="assets/logo.png" alt="" />
        <h4 class="rightbarTitle">关注</h4>
        <ul class="rightbarFriendList" >
  
          <div v-for="friend in friends" :key='friend._id' class="friend" @click="PushProfile(friend)">
            <img class="friendImg" src="../../assets/1.jpg" alt="" />
            <p class="friendName">{{friend.username}}</p>
          </div>
        </ul>
  </div>
</template>

<script>
import { getfriends, getUser } from '../../actions/users'
export default {
    name:'homeright',
    props:['profile'],
    data(){
      return{
        currenUser:{},
        friends:[],
      }
    },
    methods:{
      PushProfile(friend){
        getUser(friend._id,this.$router)
      }
    },
    async mounted(){
      const profile = JSON.parse(localStorage.getItem('profile'));
      if(!profile || !profile.hasSignin)
        return;

      this.currenUser = profile.user
      this.friends = await getfriends(this.currenUser._id);

    }

}
</script>

<style scoped>
#homeright{
    width:100%;
}
.PerContainer {
  display: flex;
  align-items: center;
  justify-content: center;
}

.PersonImg {
  width: 150px;
  height: 150px;
  margin-right: 10px;
  object-fit: cover;
  border-radius:50%;
}
.PersIntro{
  display: flex;
  flex-direction: column;
 align-items: center;
  justify-content: center;
}
.birthdayText {
  font-weight: 300;
  font-size: 15px;
}
/* .Persondesc{
 
} */

.rightbarAd {
  width: 100%;
  border-radius: 10px;
  margin: 30px 0;
}

.rightbarTitle{
    margin-bottom: 20px;
}

.rightbarFriendList {
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  /* flex-direction: column; */
}
.friend{
   width:100px;
  /*height:120px; */
  /* flex:1; */
  display: flex;
  /* align-items: center; */
  /* justify-content: center; */
  flex-direction: column;
  text-align: center;
}
.friendImg{
  width:80%;
  height:80px;
  margin-left:10%;
  border-radius:20%;
  margin-right:10%;
  object-fit: cover;
  /* margin-bottom: 20px; */
}
.friendName{
  font-size: 15px;
  /* margin:0% auto; */
}

.rightbarTitle{
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 10px;
}
</style>