<template>
  <div class="body">
    <Head
      :bread-list="{
        value: '饲料管理模块',
        children: {
          value: '饲料采购与库存管理',
        },
      }"
    />
    <CommonTable ></CommonTable>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Head from '../../components/Head.vue';
import CommonTable from '@/components/CommonTable.vue';
const formList = ref([])
const columns = ref([])
const increaseFormList = ref([])

console.log('我在呢');
</script>

<style lang="scss" scoped>
.body {
    width: 100%;
    flex: 1;
}
</style>
