<template>
  <div class="body">
    <Head
      :bread-list="{
        value: '销售与营销模块',
        children: {
          value: '销售数据统计与分析',
        },
      }"
    />
    <CommonTable
      :form-list="formList"
      :table-column="columns"
      :get-data="getFeedRecord"
      :increase-data="addFeedRecord"
      :delete-data="deleteFeedRecord"
      :update-data="updateFeedRecord"
      :increase-form-list="increaseFormList"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref, onBeforeMount } from 'vue';
import CommonTable from '@/components/CommonTable.vue';
import Head from '../../components/Head.vue';
import {
  getFeedRecord,
  addFeedRecord,
  deleteFeedRecord,
  updateFeedRecord,
} from '@/request/feed';

const formList = ref([]);

const columns = ref([]);

const increaseFormList = ref([]);

onBeforeMount(() => {
  formList.value = [
    {
      label: '饲料名称',
      key: 'feedName',
      placeholder: '请输入饲料名称',
    },
    {
      label: '喂养人',
      key: 'feedOperator',
      placeholder: '请输入喂养人姓名',
    },
    {
      label: '喂养日期',
      key: 'feedTime',
      type: 'date',
    },
  ];

  columns.value = [
    {
      label: '喂养记录编号',
      key: '_id',
    },
    {
      label: '饲料编号',
      key: 'feedId',
    },
    {
      label: '饲料名称',
      key: 'feedName',
    },
    {
      label: '规格型号',
      key: 'feedModel',
      placeholder: '请输入规格型号',
    },
    {
      label: '喂养量/kg',
      key: 'feedQuantity',
    },
    {
      label: '喂养日期',
      key: 'feedTime',
    },
    {
      label: '喂养人',
      key: 'feedOperator',
    },
  ];
  increaseFormList.value = [
    {
      label: '饲料编号',
      key: 'feedId',
      placeholder: '请输入饲料名称',
    },
    {
      label: '喂养量',
      type: 'number',
      key: 'feedQuantity',
      placeholder: '请输入饲料喂养量',
    },
    {
      label: '喂养日期',
      type: 'date',
      key: 'feedTime',
      placeholder: '请输入喂养日期',
    },
  ];
});
</script>

<style lang="scss" scoped>
.body {
  width: 100%;
}
</style>
