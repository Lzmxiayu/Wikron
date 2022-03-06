<template>
  <div id="midel">
      <div class="midelWrapper">
        <share/>
        <div v-for="posc in posts" :key='posc.id'>
          <post :posc="posc"/>
        </div>
      </div>
  </div>
</template>

<script>
import Post from './Post.vue'
import Share from './Share.vue'
import { getPosts, getPostsByUser } from '../../actions/posts'
// import {} from '../../actions/posts'
export default {
    name:'midel',
    components: { Share, Post },
    props:['profile','mode'],
    data(){
      return{
          posts:[]
      }
    },
    async mounted(){
      // console.log(this.profile)
      let posts
      if(this.mode == 'all'){
         posts = await getPosts()
         this.posts = posts.data
      }else if(this.mode == 'one'){
         posts = await  getPostsByUser(this.profile.username)
         this.posts = posts.data
        //  console.log(posts)
      }
        
        
        // this.posts = posts.data
                // location.reload()
        // this.$bus.$on('reload',()=>{
        //     location.reload()
        // })
    }
    
}
</script>

<style>
#midel{
    flex:5.5
}

.midelWrapper{
    padding: 20px;
}

</style>