<template>
  <div style="display: flex; flex-direction: column">
    <Head
      :bread-list="{
        value: '鱼苗管理模块',
        children: {
          value: '鱼苗质量',
        },
      }"
    ></Head>
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
console.log('我在呢');
const formList = [
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
    label: '库存数量',
    key: 'inventoryNums',
    placeholder: '输入对应的库存数量',
  },
  {
    label: '鱼苗规格',
    key: 'fishSize',
    type: 'select',
    placeholder: '选择鱼苗规格',
    options: [
      {
        label: '标准规格',
        value: 'normal',
      },
      {
        label: '大型规格',
        value: 'large',
      },
      {
        label: '小型规格',
        value: 'small',
      },
      {
        label: '幼苗/仔鱼',
        value: 'smaller',
      },
    ],
  },
  {
    label: '购入商',
    key: 'customer',
    placeholder: '请输入购入商名称',
    width: 160,
  },
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
    label: '操作员',
    key: 'operation',
    type: 'input',
    placeholder: '请输入操作员姓名',
  },
];

const columsn = [];
const increaseFormList = [
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
    label: '库存数量',
    key: 'inventoryNums',
    placeholder: '输入对应的库存数量',
  },
  {
    label: '鱼苗规格',
    key: 'fishSize',
    type: 'select',
    placeholder: '选择鱼苗规格',
    options: [
      {
        label: '标准规格',
        value: 'normal',
      },
      {
        label: '大型规格',
        value: 'large',
      },
      {
        label: '小型规格',
        value: 'small',
      },
      {
        label: '幼苗/仔鱼',
        value: 'smaller',
      },
    ],
  },
  {
    label: '购入商',
    key: 'customer',
    placeholder: '请输入购入商名称',
    width: 160,
  },
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
    label: '操作员',
    key: 'operation',
    type: 'input',
    placeholder: '请输入操作员姓名',
  },
];
</script>

<style lang="scss" scoped></style>
