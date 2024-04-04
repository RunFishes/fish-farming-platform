<template>
  <div class="body">
    <Head
      :bread-list="{
        value: '中央管理模块',
        children: {
          value: '池塘管理',
        },
      }"
    />
    <CommonTable
      :form-list="formList"
      :table-column="columns"
      :increase-form-list="increaseFormList"
      :get-data="getPondInfo"
      :increase-data="addPond"
      :update-data="updatePond"
      :delete-data="deletePond"
    />
  </div>
</template>

<script setup>
import { ref, onBeforeMount } from 'vue';
import Head from '../../components/Head.vue';
import CommonTable from '@/components/CommonTable.vue';
import {
  getPond,
  addPond,
  updatePond,
  deletePond,
  getFishList,
} from '@/request/pond';
import dayjs from 'dayjs';

const formList = ref();

const columns = ref([]);

const increaseFormList = ref([]);

const getPondInfo = async (params) => {
  const { data, page } = await getPond(params);
  return {
    data: data.map((ele) => {
      return {
        ...ele,
        freeQuantity:
          ele.fishAll && ele.fishAll.length
            ? ele.fishAll.map((item) => `${item.label}:  ${item.inputValue}`)
            : '--',
        fishType:
          ele.fishAll && ele.fishAll.length
            ? ele.fishAll.map((item) => item.label).join('|')
            : '--',
        updateTime: dayjs().format('YYYY-MM-DD'),
      };
    }),
    page,
  };
};

onBeforeMount(async () => {
  const data = (await getFishList()) || [];
  const fishList = data.map((item) => {
    return {
      label: item.fishType,
      selectValue: item._id,
      inputValue: 0,
    };
  });
  increaseFormList.value = [
    {
      key: 'pondName',
      label: '池塘',
      placeholder: '请输入新增池塘名',
    },
    {
      key: 'fishAll',
      label: '鱼类数量',
      inputPlaceholder: '请输入鱼类数量',
      selectPlaceholder: '请输入鱼类',
      type: 'selectAndInput',
      defaultValue: [],
      defaultList: fishList,
      filterList: [],
    },
  ];
  columns.value = [
    {
      label: '池塘',
      key: 'pondName',
    },
    {
      label: '鱼的种类',
      key: 'fishType',
    },
    {
      label: '放养数量/条',
      key: 'freeQuantity',
    },
    {
      label: '更新时间',
      key: 'updateTime',
    },
    {
      label: '创建人',
      key: 'user',
    },
    {
      label: '更新人',
      key: 'updator',
    },
  ];
  formList.value = [
    {
      label: '池塘',
      key: 'pondName',
      placeholder: '请选择池塘',
    },
  ];
});
</script>

<style lang="scss" scoped>
.body {
  display: flex;
  flex-direction: column;
  width: 100%;
}
</style>
