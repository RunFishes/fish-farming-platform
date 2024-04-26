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
    <CommonTable
      :table-column="columns"
      :form-list="formList"
      :increase-form-list="increaseFormList"
      :update-data="updateFeedManagement"
      :increase-data="addFeedManagement"
      :get-data="getFeedManagement"
      :delete-data="deleteFeedManagement"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Head from '../../components/Head.vue';
import CommonTable from '@/components/CommonTable.vue';
import * as echart from 'echarts';
import {
  getFeedManagement,
  deleteFeedManagement,
  updateFeedManagement,
  addFeedManagement,
} from '@/request/feed';
const formList = ref([
  {
    label: '饲料名称',
    key: 'feedName',
    placeholder: '请输入饲料名称',
  },
  {
    label: '规格型号',
    key: 'feedModel',
    placeholder: '请输入规格型号',
  },
  {
    label: '供应商',
    key: 'supplier',
    placeholder: '请输入供应商',
  },
]);
const columns = ref([
  {
    label: '饲料编号',
    key: '_id',
  },
  {
    label: '饲料名称',
    key: 'feedName',
  },
  {
    label: '规格型号',
    key: 'feedModel',
  },
  {
    label: '生产日期',
    key: 'productTime',
  },
  {
    label: '保质期',
    key: 'keepTime',
  },
  {
    label: '供应商',
    key: 'supplier',
  },
  {
    label: '采购数量/kg',
    key: 'quantity',
  },
  {
    label: '入库日期',
    key: 'leadTime',
  },
  {
    label: '剩余库存',
    key: 'inventory',
  },
  {
    label: '操作员',
    key: 'operator',
  },
  {
    label: '更新员',
    key: 'updator',
  },
]);
const increaseFormList = ref([
  {
    label: '饲料名称',
    key: 'feedName',
    placeholder: '请输入饲料名称',
  },
  {
    label: '规格型号',
    key: 'feedModel',
    placeholder: '请输入规格型号',
  },
  {
    label: '生产日期',
    key: 'productTime',
    type: 'date',
    placeholder: '请输入生产日期',
  },
  {
    label: '保质期/月',
    key: 'keepTime',
    placeholder: '请输入保质期时间',
  },
  {
    label: '供应商',
    key: 'supplier',
    placeholder: '请输入供应商',
  },
  {
    label: '采购数量/kg',
    key: 'quantity',
    placeholder: '请输入采购数量',
    type: 'number',
  },
  {
    label: '入库日期',
    key: 'leadTime',
    type: 'date',
    placeholder: '请输入入库日期',
  },
  {
    label: '剩余库存/kg',
    key: 'inventory',
    placeholder: '请输入库存数量',
    type: 'number',
  },
]);

console.log('我在呢');
</script>

<style lang="scss" scoped>
.body {
  width: 100%;
  flex: 1;
}
</style>
