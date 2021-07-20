<template>
  <div class="header">
    <router-link to="/">
      <div class="logo">
        <img src="../assets/image/AI-PHARMA-header-logo.png" />
      </div>
    </router-link>
    <div class="header-right">
      <div class="header-user-con">
        <el-space wrap>
          <div><el-button type="danger" round>投稿する</el-button></div>

          <div>
            <div class="user-avator">
              <img src="../assets/image/img.jpg" />
            </div>
          </div>
        </el-space>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {};
  },
  couputed: {},
  watch: {},
  methods: {},
  created() {},
};
</script>
<style scoped>
.header {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 70px;
  font-size: 22px;
  color: rgba(180, 160, 129, 0.938);
}
.header .logo {
  float: left;
  width: 250px;
  line-height: 70px;
}
.header-right {
  float: right;
  padding-right: 50px;
}
.header-user-con {
  display: flex;
  height: 70px;
  align-items: center;
}
.user-avator img {
  display: block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
</style>
