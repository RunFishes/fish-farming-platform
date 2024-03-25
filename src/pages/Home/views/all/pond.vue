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
import { ref } from 'vue';
import Head from '../../components/Head.vue';
import CommonTable from '@/components/CommonTable.vue';
const formList = ref([
  {
    label: '仓库',
    key: 'warehouse',
    type: 'select',
    placeholder: '选择仓库',
    options: [
      {
        label: '仓库1',
        value: 'normal',
      },
      {
        label: '仓库2',
        value: 'large',
      },
      {
        label: '仓库3',
        value: 'small',
      },
    ],
  },
  {
    label: '鱼的种类',
    key: 'fishType',
    type: 'select',
    placeholder: '选择鱼的种类',
    options: [
      {
        label: '大黄鱼',
        value: 'yellowCroaker',
      },
      {
        label: '鲈鱼',
        value: 'perch',
      },
      {
        label: '石斑鱼',
        value: 'grouper',
      },
      {
        label: '草鱼',
        value: 'grassCarp',
      },
      {
        label: '鲤鱼',
        value: 'carp',
      },
      {
        label: '鲫鱼',
        value: 'crucianCarp',
      },
    ],
  },
  {
    label: '池塘',
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
    label: '池塘',
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
