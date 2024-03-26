<template>
  <div class="body">
    <Head
      :bread-list="{
        value: '中央管理模块',
        children: {
          value: '仓库管理',
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
import { ref } from 'vue';
import Head from '../../components/Head.vue';
import CommonTable from '@/components/CommonTable.vue';
const formList = ref([
  {
    label: '仓库',
    key: 'warehouse',
    type: 'select',
    placeholder: '选择仓库',
    options: [],
  },
  {
    label: '鱼的种类',
    key: 'fishType',
    type: 'select',
    placeholder: '选择鱼的种类',
    options: [],
  },
  {
    label: '放养池塘',
    key: 'pondId',
    type: 'select',
    placeholder: '请选择池塘',
    options: [],
  },
]);

const columns = ref([
  {
    label: '仓库',
    key: 'warehouse',
  },
  {
    label: '鱼的种类',
    key: 'fishType',
  },
  {
    label: '放养池塘',
    key: 'pondId',
  },
  {
    label: '放养数量',
    value: 'freeQuantity',
  },
  {
    label: '仓库剩余鱼数量',
    value: 'remainQuantity',
  },
  {
    label: '操作员',
    key: 'operation',
  },
]);

const increaseFormList = [];
</script>

<style lang="scss" scoped>
.body {
  display: flex;
  flex-direction: column;
  width: 100%;
}
</style>
