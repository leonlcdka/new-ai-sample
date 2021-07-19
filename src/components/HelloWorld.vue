<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <el-descriptions
      title="垂直带边框列表"
      direction="vertical"
      :column="1"
      border
    >
      <el-descriptions-item label="备注">
        <el-tag size="small" >学校</el-tag>
        <el-tag size="small">学校</el-tag>
      </el-descriptions-item>
    </el-descriptions>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
