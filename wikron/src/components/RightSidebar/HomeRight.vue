<template>
  <div id="homeright">
    <div class="PerContainer">
        <img class="PersonImg" src="../../assets/1.jpg" alt="" />
    </div>
     <div class="PersIntro">
          <span class="Pername" @click="PushProfile">
            <b>{{profile.username}}</b> 
          </span>
          <span class="Persondesc">
              {{profile.desc}}
          </span>
        </div>
    
        <img class="rightbarAd" src="assets/logo.png" alt="" />
        <h4 class="rightbarTitle">关注</h4>
        <ul class="rightbarFriendList" v-if="endi">
          <div v-for='friend in friends' :key='friend._id' class="friend">
            <img class="friendImg" src="../../assets/1.jpg" alt="" />
            <p class="friendName">{{firend.username}}</p>
          </div>
        </ul>
  </div>
</template>

<script>
import { getfriends } from '../../actions/users'
export default {
    name:'homeright',
    props:['profile'],
    data(){
      return{
        friends:[],
        endi:false

      }
    },
    methods:{
      PushProfile(){
        this.$router.push({
          name:'Profile',
          params:{
            profile:this.profile
          }
        })
      }
    },
    // mounted(){
    //   console.log(this.frinends)
    // },
    async created(){
      this.frinends = await getfriends(this.profile._id)
       this.endi = await true
      console.log(this.frinends)
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
  height:120px;
  flex:1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  /* text-align: center; */
}
.friendImg{
  width:80px;
  height:80px;

  border-radius:20%;
  margin-right:10%;
  object-fit: cover;
  /* margin-bottom: 20px; */
}
.friendName{
  font-size: 15px;
  margin:0% auto;
}

.rightbarTitle{
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 10px;
}
</style>