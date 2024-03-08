<template>
  <el-affix :offset="0">
    <div class="topBar">你好</div>
  </el-affix>
</template>

<script setup>
import { ElAffix } from 'element-plus';
console.log('WOZHIXINGLE');
</script>

<style lang="scss" scoped>
.topBar {
  height: 40px;
  background-color: red;
}
</style>
