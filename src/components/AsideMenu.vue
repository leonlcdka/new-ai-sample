<template>
  <div class="asideMenu">
    <div>データベース</div>
    <el-aside class="aside" width="200px">
      <el-menu class="menu" :default-openeds="['1','2','3']" router="true" collapse-transition=false>
        <el-submenu index="1">
          <template #title>データベース</template>
          <el-menu-item-group>
            <template #title>QA</template>
            <el-menu-item index="/table">検索</el-menu-item>
            <el-menu-item index="/">管理</el-menu-item>
          </el-menu-item-group>
          <template>データベースaaaa</template>
          <el-menu-item-group title="事例">
            <el-menu-item index="/table">検索</el-menu-item>
            <el-menu-item index="/">管理</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="DI辞書">
            <el-menu-item index="/table">検索</el-menu-item>
            <el-menu-item index="/">管理</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template #title>データベース</template>
          <el-menu-item-group>
            <template #title>QA</template>
            <el-menu-item index="/table">検索</el-menu-item>
            <el-menu-item index="/">管理</el-menu-item>
          </el-menu-item-group>
          <template>データベースaaaa</template>
          <el-menu-item-group title="事例">
            <el-menu-item index="/table">検索</el-menu-item>
            <el-menu-item index="/">管理</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="DI辞書">
            <el-menu-item index="/table">検索</el-menu-item>
            <el-menu-item index="/">管理</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="3">
          <template #title>データベース</template>
          <el-menu-item-group>
            <template #title>QA</template>
            <el-menu-item index="/table">検索</el-menu-item>
            <el-menu-item index="/">管理</el-menu-item>
          </el-menu-item-group>
          <template>データベースaaaa</template>
          <el-menu-item-group title="事例">
            <el-menu-item index="/table">検索</el-menu-item>
            <el-menu-item index="/">管理</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="DI辞書">
            <el-menu-item index="/table">検索</el-menu-item>
            <el-menu-item index="/">管理</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
          <!-- <el-submenu index="1-4">
            <template #title>Option4</template>
            <el-menu-item index="1-4-1">Option 5-1</el-menu-item>
          </el-submenu>
         -->

        <!-- <el-submenu index="2">
          <template #title><i class="el-icon-menu"></i>Navigator Two</template>
          <el-menu-item-group>
            <template #title>Group 1</template>
            <el-menu-item index="2-1">Option 1</el-menu-item>
            <el-menu-item index="2-2">Option 2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="Group 2">
            <el-menu-item index="2-3">Option 3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="2-4">
            <template #title>Option 4</template>
            <el-menu-item index="2-4-1">Option 4-1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-submenu index="3">
          <template #title
            ><i class="el-icon-setting"></i>Navigator Three</template
          >
          <el-menu-item-group>
            <template #title>Group 1</template>
            <el-menu-item index="3-1">Option 1</el-menu-item>
            <el-menu-item index="3-2">Option 2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="Group 2">
            <el-menu-item index="3-3">Option 3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="3-4">
            <template #title>Option 4</template>
            <el-menu-item index="3-4-1">Option 4-1</el-menu-item>
          </el-submenu>
        </el-submenu>  -->
      </el-menu>
    </el-aside>
  </div>
</template>

<script scoped>
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
/* .aside {
  background-color: black;
}
.asideMenu {
  background-color: black;
}
.menu {
  background-color: slategrey;
} */
</style>