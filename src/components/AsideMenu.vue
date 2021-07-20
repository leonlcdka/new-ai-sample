<template>
  <div class="sidebar">
    <!-- <el-menu
      class="sidebar-el-menu"
      :default-active="onRoutes"
      background-color="#324157"
      text-color="#bfcbd9"
      active-text-color="#20a0ff"
      unique-opened
      router
    > -->
    <el-menu
      class="sidebar-el-menu"
      :default-active="onRoutes"
      text-color="#bfcbd9"
      active-text-color="#20a0ff"
      unique-opened
      router
    >
      <div class="subtetle" background-color="#324157">データベース</div>
      <div class="subtetle"><span>QA</span></div>
      <el-menu-item index="/about">検索</el-menu-item>
      <el-menu-item index="/table">管理1</el-menu-item>

      <div class="subtetle"><span>事例</span></div>
      <el-menu-item index="/search">検索</el-menu-item>
      <el-menu-item index="/table">管理</el-menu-item>

      <div class="subtetle"><span>DI辞書</span></div>
      <el-menu-item index="/table">検索</el-menu-item>
      <el-menu-item index="/table">管理</el-menu-item>

      <div class="subtetle"><span>掲示板</span></div>
      <el-menu-item index="/table" style="height=1px">自施設</el-menu-item>
      <el-menu-item index="/table">グループ</el-menu-item>
      <el-menu-item index="/table">全体</el-menu-item>

      <div class="subtetle"><span>その他</span></div>
      <div class="subtetle"><span>動画</span></div>
      <el-menu-item index="/table"><template #title>動画コンテンツ</template></el-menu-item>

      <div class="subtetle"><span>予約</span></div>
      <el-menu-item index="/table">学会カレンダー</el-menu-item>

      <div class="subtetle"><span>その他情報一覧</span></div>
      <el-menu-item index="/table">企業一覧</el-menu-item>

    </el-menu>
  </div>
</template>

<script>

</script>

<style scoped>
 .sidebar {
  display: block;
  /* position: absolute; */
  /* left: 0; */
  /* top: 80px; */
  /* bottom: 0; */
  overflow-y: scroll;
}
/*.sidebar::-webkit-scrollbar {
  width: 0;
}
.sidebar-el-menu:not(.el-menu--collapse) {
  width: 250px;
  border-radius:1px;
}
.sidebar > ul {
  height: 100%;
}
.subtetle{ */
  /* height: 30px;
  padding-top:8px;
  border: 1;
  border-color: dimgrey; */
  /* text-align:center; */
/* border:2px solid #a1a1a1;
padding:10px 40px;  */
/* background:#dddddd; */
/* width:350px; */
/* border-radius:1px;
}
.el-menu-item {
  height: 36px !important;
  line-height: 36px !important;
  width: 100% !important;
} */
</style>
