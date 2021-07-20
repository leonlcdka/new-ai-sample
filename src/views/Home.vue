<template>
  <div class="about">
    <myheader class="myheader"></myheader>
    <!-- <asideMenu class="asidMenu"></asideMenu> -->
    <!-- <router-view></router-view> -->
    <el-container class="container">
      <asideMenu class="asidMenu"></asideMenu>
      <el-main>
 <div class="content-box" :class="{ 'content-collapse': collapse }"> 
        <div class="content">
          <router-view v-slot="{ Component }"> 
             <!--<transition name="move" mode="out-in">
              <keep-alive :include="tagsList"> -->
                <component :is="Component" />
              <!-- </keep-alive>
            </transition> -->
            <myFooter>Footer</myFooter>
          </router-view>
        </div>
      </div>
      </el-main>
     
      
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import myheader from "@/components/Header.vue";
import asideMenu from "@/components/AsideMenu.vue";
import myFooter from "@/components/FooterBar.vue";
export default {
  name: "Home",
  components: {
    // HelloWorld,
    myheader,
    asideMenu,
    myFooter,
  },
  
};
</script>
<style scoped>
/* .el-main {
  background-color: aqua;
} */
</style>
