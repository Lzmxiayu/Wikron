<template>
  <div id="share">
        <div class="shareWrapper">
        <div class="shareTop">
          <img
            class="shareProfileImg"
            src="../../assets/logo.png"
            alt=""
          />
          <input
            placeholder="What's in your mind ?"
            class="shareInput"
            v-model="postForm.desc"
            ref={desc}
          />
        </div>
        <hr class="shareHr" />

          <div class="shareImgContainer">
            <img class="shareImg" src={URL.createObjectURL(file)} alt="" />
            <!-- <Cancel class="shareCancelImg" onClick="" /> -->
          </div>
 
        <form class="shareBottom" >
          <div class="shareOptions">
            <label type="file" class="shareOption" >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="tomato" class="bi bi-image shareIcon" viewBox="0 0 16 16">
                <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z"/>
              </svg>
              <span class="shareOptionText"></span>
              <input
                style="display: none" 
                type="file"
                id="file"
                accept=".png,.jpeg,.jpg"
                :onChange="UploadPicture"
              />
            </label>
            <div class="shareOption">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="blue" class="bi bi-bookmark shareIcon" viewBox="0 0 16 16">
                <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
              </svg>
              <span class="shareOptionText"></span>
            </div>
            <div class="shareOption">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="green" class="bi bi-geo-alt shareIcon" viewBox="0 0 16 16">
                <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
              </svg>
              <span class="shareOptionText"></span>
            </div>
            <div class="shareOption">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="goldenrod" class="bi bi-emoji-smile shareIcon" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
              </svg>
              <span class="shareOptionText"></span>
            </div>
          </div>
          <button class="shareButton"  @click="SharePost">
            Share
          </button>
        </form>
      </div>
  </div>
</template>

<script>
import {createPost} from '../../actions/posts'
export default {
    name:'share',
    data(){
      return {
        postForm:{
          userId: '1',
          username:'',
          desc: '',
          img: '2',
          likes: [],
        }
      }
    },
    methods:{
      SharePost(){
        const profile = JSON.parse(localStorage.getItem('profile'))
        if(!profile || !profile.hasSignin)
          return;
        this.postForm.userId=profile._id
        this.postForm.username=profile.username
        
          // console.log(profile.username)
        createPost(this.postForm,this.$router)

        // this.$bus.$emit('reload')
      },
      UploadPicture(){
        console.log(e)
      }
    }
}
</script>

<style>
#share {
  width: 100%;
  border-radius: 10px;
  -webkit-box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
  box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
}

.shareWrapper {
  padding: 10px;
}

.shareTop {
  display: flex;
  align-items: center;
}

.shareProfileImg {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
}

.shareInput {
  border: none;
  width: 80%;
}

.shareInput:focus {
  outline: none;
}

.shareHr {
  margin: 20px;
}

.shareBottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.shareOptions{
    display: flex;
    margin-left: 20px;
}

.shareOption{
    display: flex;
    align-items: center;
    margin-right: 15px;
    cursor: pointer;
}

.shareIcon{
    font-size: 18px;
    margin-right: 3px;
}

.shareOptionText{
    font-size: 10px;
    font-weight: 500;
}

.shareButton{
    border: none;
    padding: 7px;
    border-radius: 5px;
    background-color: green;
    font-weight: 500;
    margin-right: 20px;
    cursor: pointer;
    color: white;
}

.shareImgContainer{
  padding: 0 20px 10px 20px;
  position: relative;
}

.shareImg{
  width: 100%;
  object-fit: cover;
}

.shareCancelImg{
  position: absolute;
  top: 0;
  right: 20px;
  cursor: pointer;
  opacity: 0.7;
}
</style>