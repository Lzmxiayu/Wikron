<template>
  <div id="profile">
      <top-bar :profile="currentUser"/>
      <div class="profile">
        <left-side />
        <div class="profileRight">
          <div class="profileRightTop">
            <div class="profileCover">
              <img
                class="profileCoverImg"
                src="../../assets/1.jpg"
                alt=""
              />
              <img
                class="profileUserImg"
                src="../../assets/me.jpg"
                alt=""
              />
            </div>
            <div class="profileInfo">
              <h4 class="profileInfoName"><strong>{{profile.username}}</strong></h4>
              <span class="profileInfoDesc">{{profile.desc}}</span>
              <button style="border:none;" v-if="hasfollow == 1" @click="follow">关注</button>
              <button style="border:none;" v-if="hasfollow == 2" @click="unfollow">取消关注</button>

            </div>
          </div>
          <div class="profileRightBottom">
              <midel :profile="profile" mode="one"/>
              <right-side :profile="profile"/>
              <!-- <r-side-bar :profile="profile"/> -->
            <!-- <Feed username={username} />
            <Rightbar user={user} /> -->
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import LeftSide from '../LeftSidebar/LeftSide.vue'
import Midel from '../Midel/Midel.vue'
import RightSide from '../RightSidebar/RightSide.vue'
import TopBar from '../TopBar/TopBar.vue'
import RSideBar from './RSideBar.vue'
import {followUser,unfollowUser} from '../../actions/users'

export default {
  components: { TopBar, LeftSide, Midel, RightSide, RSideBar },
    name:'profile',
    data(){
      return {
        profile:{},
        hasfollow:0,
        hasSignin:false,
        currentUser:{}
      }
    },
    methods:{
      follow(){  
        if(this.hasSignin)
        {
          const data={
            userId:this.currentUser._id
          }

          followUser(data,this.profile._id)
          this.currentUser.followings.push(this.profile._id)
          localStorage.setItem('profile',JSON.stringify(this.currentUser))
          
          this.hasfollow = 2
          
        }         
      },
      unfollow(){  
        if(this.hasSignin)
        {
          const data={
            userId:this.currentUser._id
          }
          unfollowUser(data,this.profile._id)
          this.currentUser.followings.map((val,index)=>{
            if(val == this.profile._id){
              this.currentUser.followings.splice(index,1)
            }
          })
          localStorage.setItem('profile',JSON.stringify(this.currentUser))
         
          this.hasfollow = 1
        }            
      }
    },
    created(){
      const profile = JSON.parse(localStorage.getItem('profile'))
      this.currentUser = profile.user
      this.profile = this.$route.params.profile   

      console.log(profile.user && profile.hasSignin)
      if(profile.user && profile.hasSignin){
        this.hasSignin =true
        this.hasfollow = 1
        this.currentUser.followings.map((friend)=>{
          if(friend == this.profile._id)
            this.hasfollow = 2
        })
      }else{
        this.hasfollow = 1
      }
     

    }
}
</script>

<style scoped>
.profile{
    display: flex;
}

.profileRight{
    flex: 9;
}

.profileCover{
    height: 320px;
    position: relative;
}

.profileCoverImg{
    width: 100%;
    height: 250px;
    object-fit: cover;
}

.profileUserImg{
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    top: 150px;
    border: 3px solid white;
}

.profileInfo{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.profileInfoName{
    font-size: 24px;
    /* margin-top:0%; */
}

.profileInfoDesc{
    font-weight: 300;
}

.profileRightBottom{
    display: flex;
}
</style>