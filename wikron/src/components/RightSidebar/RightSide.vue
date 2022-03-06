<template>
  <div id="rightside">
    <div class="rightbarWrapper">
      <home-right :profile="profile"/>
      </div>
  </div>
</template>

<script>
import HomeRight from './HomeRight.vue'
export default {
    components: { HomeRight },
    props:['profile'],
    name:'rightside',

}
</script>

<style scoped>
#rightside {
  flex: 3.5;
}
.rightbarWrapper {
  padding: 20px 0 0 0;
}


</style>