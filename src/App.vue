<template>
  <myheader class="myheader"></myheader>
  <el-container class="container">
    <asideMenu class="asidMenu"></asideMenu>
    <router-view></router-view>
  </el-container>
</template>
<script>
import myheader from "./components/Header.vue";
import asideMenu from "./components/AsideMenu.vue";
export default {
  
  components: { myheader, asideMenu },
};
</script>
<style scoped>
.myheader {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 70px;
  font-size: 22px;
  color: rgba(180, 160, 129, 0.938);
  background-color: rgb(246, 252, 250);
}

/* .header-right {
  float: right;
  padding-right: 50px;
}
.header-user-con {
  display: flex;
  height: 70px;
  align-items: center;
} */
</style>