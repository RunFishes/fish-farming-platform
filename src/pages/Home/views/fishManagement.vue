<template>
  <div class="body">
    <Head
      :bread-list="{
        value: '鱼苗管理模块',
        children: {
          value: '鱼苗库存管理',
        },
      }"
    />
    <CommonTable
      :form-list="formList"
      :table-column="columns"
      :increase-form-list="increaseFormList"
    />
  </div>
</template>

<script setup>
import Head from '../components/Head.vue';
import CommonTable from '../../../components/CommonTable.vue';
const formList = [];

const columns = [];

const increaseFormList = [];
</script>

<style lang="scss" scoped>
.body {
  display: flex;
  flex-direction: column;
  width: 100%;
}
</style>
