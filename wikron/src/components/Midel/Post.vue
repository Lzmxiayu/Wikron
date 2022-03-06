<template>
    <div  id="post">
      <div class="postWrapper">
        <div class="postTop">
          <div class="postTopLeft" @click="PushProfile">
            <!-- <Link to={`/profile/${user.username}`}> -->
            <i to="#">
              <img
                class="postProfileImg"
                src="../../assets/logo.png"
                alt=""
              />
            </i> 
            <span class="postUsername">{{posc.username}}</span>
            <span class="postDate">{{posc.createdAt}}</span> 
          </div>
          <div class="postTopRight">
            <!-- <MoreVert /> -->
          </div>
        </div>
        <div class="postCenter">
          <span class="postText">{{posc.desc}}</span>
          <img class="postImg" src="../../assets/1.jpg" alt="" />
        </div>
        <div class="postBottom">
          <div class="postBottomLeft">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-heart likeIcon" viewBox="0 0 16 16">
            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
            </svg>
           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star likeIcon" viewBox="0 0 16 16">
            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
            </svg>
            <span class="postLikeCounter">{{posc.likes.length}}人点赞</span>
          </div>
          <div class="postBottomRight">
            <span class="postCommentText">评论</span>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import { getUser } from '../../actions/users'
export default {
    name:'post',
    props:['posc'],
    data(){
        return {
           
        }
    },
    methods:{
       PushProfile(){
        // console.log(this.posc)
        let data =  getUser(this.posc.userId,this.$router)
      
      }
    },
    mounted(){
              // console.log(this.posc)
    }
}
</script>

<style scoped>
#post {
  width: 100%;
  border-radius: 10px;
  -webkit-box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
  box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
  margin: 30px 0;
}

.postWrapper {
  padding: 10px;
}

.postTop {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.postTopLeft {
  display: flex;
  align-items: center;
}

.postProfileImg {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
}

.postUsername {
  font-size: 15px;
  font-weight: 500;
  margin: 0 10px;
}

.postDate{
    font-size: 12px;
}

.postCenter{
    margin: 20px 0;
}

.postImg{
    margin-top: 20px;
    width: 100%;
    max-height: 500px;
    object-fit: contain;
}

.postBottom{
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.postBottomLeft{
    display: flex;
    align-items: center;   
}

.likeIcon{
    width: 24px;
    height: 24px;
    margin-right: 5px;
    cursor: pointer;
}

.postLikeCounter{
    font-size: 15px;
}

.postCommentText{
    cursor: pointer;
    border-bottom: 1px dashed gray;
    font-size: 15px;
} 


</style>