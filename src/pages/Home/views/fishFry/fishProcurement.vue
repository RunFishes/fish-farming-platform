<template>
  <div class="body">
    <Head
      :bread-list="{
        value: '鱼苗管理模块',
        children: {
          value: '鱼苗采购',
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
import Head from '../../components/Head.vue';
import CommonTable from '@/components/CommonTable.vue';
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
    label: '鱼苗交付时间',
    key: 'moneySubmit',
    type: 'date',
    placeholder: '请选择交付时间',
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

const columns = [
  {
    label: '鱼的种类',
    key: 'fishType',
  },
  {
    label: '鱼苗交付时间',
    key: 'moneySubmit',
  },
  {
    label: '鱼苗规格',
    key: 'fishSize',
  },
  {
    label: '鱼苗购买总价',
    key: 'fishPrice',
  },
  {
    label: '购入商',
    key: 'customer',
  },
  {
    label: '仓库',
    key: 'warehouse',
  },
  {
    label: '操作员',
    key: 'operation',
  },
];

const increaseFormList = [
  {
    label: '鱼的种类',
    key: 'fishType',
    type: 'select',
    placeholder: '选择鱼的种类',
    options: [],
  },
  {
    label: '鱼苗交付时间',
    key: 'moneySubmit',
    type: 'date',
    placeholder: '请选择交付时间',
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

<style lang="scss" scoped>
.body {
  display: flex;
  flex-direction: column;
  width: 100%;
}
</style>
