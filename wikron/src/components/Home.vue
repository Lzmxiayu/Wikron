<template>
  <div id='home'>
    <TopBar :profile="profile"/>
    <div class='homeContainer'>
      <left-side/>
      <midel mode="all" />
      <right-side :profile="profile"/>
    </div>
    <!-- <auth/> -->
    <!-- <register/> -->
  </div>
</template>

<script>
import TopBar from './TopBar/TopBar'
import Midel from './Midel/Midel.vue'
import LeftSide from './LeftSidebar/LeftSide.vue'
import RightSide from './RightSidebar/RightSide.vue'
import Auth from './RegistAuth/Auth.vue'
import Register from './RegistAuth/Register.vue'

export default {
    name:'home',
    components:{
      TopBar,Midel,LeftSide,
        RightSide,
        Auth,
        Register
    },
    data(){
      return {
        profile:{}
      }
    },
    created(){
      this.profile = JSON.parse(localStorage.getItem('profile')).user
      
      // console.log(JSON.parse(this.profile))
    }

}
</script>

<style >
#home{
  width:100%;
  height: 100%;
}

.homeContainer{
    display: flex;
    width: 100%;
}

</style>