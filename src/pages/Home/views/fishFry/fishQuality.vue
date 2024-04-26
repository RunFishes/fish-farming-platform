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
      :get-data="getData"
      :increase-data="addFishQuality"
      :delete-data="deleteFishQuality"
      :update-data="updateFishQuality"
      :is-add-show="false"
      :is-delete-show="false"
      :isDownloaddShow="false"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Head from '../../components/Head.vue';
import CommonTable from '@/components/CommonTable.vue';
import { getFishList } from '@/request/pond';
import {
  getFishQuality,
  addFishQuality,
  deleteFishQuality,
  updateFishQuality,
} from '@/request/fishQuality';
import dayjs from 'dayjs';

const formList = ref();

const increaseFormList = ref();

const columns = ref();

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

const getData = async (params) => {
  const res = await getFishQuality(params);
  return {
    data: res.data.map((item) => {
      return {
        ...item,
        weight: item.weight
          .map((item) => ({
            time: new Date(item.time),
            weightValue: item.weightValue,
          }))
          .sort((a, b) => a.time - b.time)
          .map((item) => ({
            time: dayjs(item.time).format('YYYY-MM-DD'),
            weightValue: item.weightValue,
          })),
      };
    }),
    page: res.page,
  };
};

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
      label: '鱼苗编号',
      key: '_id',
    },
    {
      label: '鱼的种类',
      key: 'fishType',
      type: 'select',
      placeholder: '选择鱼的种类',
      options: fishList || [],
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
  ];
  increaseFormList.value = [
    {
      label: '请选择日期',
      key: 'time',
      type: 'date',
    },
    {
      label: '体重',
      key: 'weightValue',
      type: 'number',
    },
  ];
  columns.value = [
    {
      label: '鱼苗编号',
      key: '_id',
    },
    {
      label: '鱼苗的种类',
      key: 'fishType',
    },
    {
      label: '鱼苗规格',
      key: 'fishSize',
      customRender: (data) => {
        return sizeList.find((item) => item.value === data)?.label || '';
      },
    },
    {
      label: '体重变化',
      key: 'weight',
      type: 'line',
    },
    {
      label: '更新人',
      key: 'updator',
    },
    {
      label: '创建人',
      key: 'operator',
    },
  ];
});
</script>

<style lang="scss" scoped></style>
