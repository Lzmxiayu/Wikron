<template>
  <div id='topbar'>
       <div class="topbarLeft">
        <!-- <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Lamasocial</span>
        </Link> -->
      </div>
      <div class="topbarCenter">
        <div class="searchbar">
          <!-- <Search class="searchIcon" /> -->
          <i class="searchIcon"></i>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
          </svg>
          <input
            placeholder="Search for friend, post or video"
            class="searchInput"
          /> 
        </div>
      </div>
      <div class="topbarRight">
        <div class="topbarLinks">
          <span class="topbarLink" @click="PushRoute('Home')">主页</span>
          <!-- <span class="topbarLink" @click="PushRoute('Profile')">时间轴</span> -->
          <span class="topbarLink" v-if="!this.hasSignin" @click="PushRoute('Auth')">登录</span>
          <span class="topbarLink" v-if="this.hasSignin">{{this.username}}</span>
          <span class="topbarLink" v-if="this.hasSignin" @click="Logout">退出</span>
        </div>
        <!-- <div class="topbarIcons">
          <div class="topbarIconItem">
            <Person />
            <span class="topbarIconBadge">1</span>
          </div>
          <div class="topbarIconItem">
            <Chat />
            <span class="topbarIconBadge">2</span>
          </div>
          <div class="topbarIconItem">
            <Notifications />
            <span class="topbarIconBadge">1</span>
          </div>
        </div> -->
        <!-- <Link to={`/profile/${user.username}`}> -->
          <!-- <img
            src={
              user.profilePicture
                ? PF + user.profilePicture
                : PF + "person/noAvatar.png"
            }
            alt=""
            className="topbarImg"
          /> -->
        <!-- </Link> -->
      </div>
  </div>
</template>

<script>
export default {
    name:'topbar',
    props:['profile'],
    data(){
      return{
        hasSignin:false,
        username:'',
      }
    },
    methods:{
      PushRoute(name){
        this.$router.push({
          name:name
        })
      },
      Logout(){
        // let profile = JSON.parse(localStorage.getItem('profile'))
        // localStorage.setItem()
        localStorage.removeItem('profile')
        location.reload()
      }
    },
    created(){
      const profile = JSON.parse(localStorage.getItem('profile'))
      // console.log(profile)
      if(profile){
        this.hasSignin = profile.hasSignin
        this.username = profile.user.username
      }
      // console.log(this.profile)
    }
}
</script>

<style scoped>
#topbar {
  height: 60px;
  width: 100%;
  background-color: #1877f2;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 999;
}

.topbarLeft {
  flex: 3;
}

.logo {
  font-size: 24px;
  margin-left: 20px;
  font-weight: bold;
  color: white;
  cursor: pointer;
}

.topbarCenter {
  flex: 5;
}

.searchbar {
  width: 100%;
  height: 30px;
  background-color: white;
  border-radius: 30px;
  display: flex;
  align-items: center;
}

.searchIcon {
  font-size: 20px !important;
  margin-left: 10px;
}

.searchInput {
  border: none;
  width: 70%;
}

.searchInput:focus {
  outline: none;
}

.topbarRight {
  flex: 4;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: white;
}

.topbarLink {
  margin-right: 10px;
  font-size: 14px;
  cursor: pointer;
}

.topbarIcons {
  display: flex;
}

.topbarIconItem {
  margin-right: 15px;
  cursor: pointer;
  position: relative;
}

.topbarIconBadge {
  width: 15px;
  height: 15px;
  background-color: red;
  border-radius: 50%;
  color: white;
  position: absolute;
  top: -5px;
  right: -5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
}

.topbarImg {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
}


</style>