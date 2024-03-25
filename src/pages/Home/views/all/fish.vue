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
    label: '引入时间',
    key: 'leadTime',
    type: 'date',
    placeholder: '请选择引入时间',
  },
  {
    label: '排除时间',
    key: 'excludeTime',
    type: 'date',
    placeholder: '请选择引入时间',
  },
  {
    label: '操作员',
    key: 'operation',
  },
]);

const columns = ref([
  {
    label: '鱼的种类',
    key: 'fishType',
  },
  {
    label: '引入时间',
    value: 'leadTime',
  },
  {
    label: '排除时间',
    value: 'excludeTime',
  },
  {
    label: '操作员',
    key: 'operation',
  },
]);

const increaseFormList = ref([
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
    label: '引入时间',
    key: 'leadTime',
    type: 'date',
    placeholder: '请选择引入时间',
  },
  {
    label: '排除时间',
    key: 'excludeTime',
    type: 'date',
    placeholder: '请选择引入时间',
  },
  {
    label: '操作员',
    key: 'operation',
  },
]);
</script>

<style lang="scss" scoped>
.body {
  display: flex;
  flex-direction: column;
  width: 100%;
}
</style>
