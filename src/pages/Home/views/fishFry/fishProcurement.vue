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
      :increase-data="addFishPro"
      :delete-data="deleteFishPro"
      :update-data="updateFishPro"
      :get-data="getFishPro"
      @refresh="getLineData"
    />
    <div style="display: flex; justify-content: center">
      <LineChart
        style="height: 400px; width: 1000px"
        :data="lineData"
      ></LineChart>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import Head from '../../components/Head.vue';
import CommonTable from '@/components/CommonTable.vue';
import LineChart from '@/components/LineChart.vue';
import { getFishList } from '@/request/pond';
import {
  getFishPro,
  deleteFishPro,
  addFishPro,
  updateFishPro,
} from '@/request/fishFry';
import { dateSort } from '@/utils/dateSort';

const formList = ref([]);

const columns = ref([]);

const increaseFormList = ref([]);

const lineData = ref([]);

const getLineData = (data) => {
  const list = dateSort(
    data?.length
      ? data.map((item) => ({
          time: item.moneySubmit,
          value: item.fishPrice,
        }))
      : []
  );
  lineData.value = list;
};

const sizeList = [
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
];

onMounted(async () => {
  const data = await getFishList();
  const fishList = data.map((item) => {
    return {
      label: item.fishType,
      value: item._id,
    };
  });
  formList.value = [
    {
      label: '鱼的种类',
      key: 'fishType',
      type: 'select',
      placeholder: '选择鱼的种类',
      options: fishList,
    },
    {
      label: '鱼苗规格',
      key: 'fishSize',
      type: 'select',
      placeholder: '选择鱼苗规格',
      options: sizeList,
    },
    {
      label: '购入商',
      key: 'customer',
      placeholder: '请输入购入商名称',
      width: 160,
    },
    {
      label: '操作员',
      key: 'operation',
      type: 'input',
      placeholder: '请输入操作员姓名',
    },
  ];
  columns.value = [
    {
      label: '鱼苗编号',
      key: '_id',
    },
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
      customRender: (data) => {
        return sizeList.find((item) => item.value === data)?.label || '';
      },
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
      label: '操作员',
      key: 'operator',
    },
  ];
  increaseFormList.value = [
    {
      label: '鱼的种类',
      key: 'fishType',
      type: 'select',
      placeholder: '选择鱼的种类',
      options: fishList,
      updateDisabled: true,
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
      label: '鱼苗购买总价',
      key: 'fishPrice',
      type: 'number',
      placeholder: '请输入鱼苗购买总价',
    },
    {
      label: '购入商',
      key: 'customer',
      placeholder: '请输入购入商名称',
    },
  ];
});
</script>

<style lang="scss" scoped>
.body {
  display: flex;
  flex-direction: column;
}
</style>
1
