<template>
  <div class="body">
    <Head
      :bread-list="{
        value: '销售与营销模块',
        children: {
          value: '客户信息管理',
        },
      }"
    />
    <CommonTable
      :form-list="formList"
      :table-column="columns"
      :increase-form-list="increaseFormList"
      :get-data="getCustom"
      :increase-data="addCustom"
      :delete-data="deleteCustom"
      :update-data="updateCustom"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref, onBeforeMount } from 'vue';
import CommonTable from '@/components/CommonTable.vue';
import Head from '../../components/Head.vue';
import {
  getCustom,
  addCustom,
  deleteCustom,
  updateCustom,
} from '@/request/custom';

const formList = ref([]);

const columns = ref([]);

const increaseFormList = ref([]);

onBeforeMount(() => {
  formList.value = [
    {
      label: '客户名称',
      key: 'name',
      placeholder: '请输入客户名称',
    },
    {
      label: '客户手机号',
      key: 'phone',
      placeholder: '请输入客户手机号',
    },
    {
      label: '客户微信号',
      key: 'wechat',
      placeholder: '请输入客户微信号',
    },
  ];

  columns.value = [
    {
      label: '客户名称',
      key: 'name',
    },
    {
      label: '客户手机号',
      key: 'phone',
    },
    {
      label: '客户微信号',
      key: 'wechat',
    },
    {
      label: '交易量',
      key: 'sellQuantity',
    },
    {
      label: '操作人',
      key: 'operator',
    },
  ];
  increaseFormList.value = [
    {
      label: '客户名称',
      key: 'name',
      placeholder: '请输入客户名称',
    },
    {
      label: '客户手机号',
      key: 'phone',
      placeholder: '请输入客户手机号',
    },
    {
      label: '客户微信号',
      key: 'wechat',
      placeholder: '请输入客户微信号',
    },
    {
      label: '交易量',
      key: 'sellQuantity',
      type: 'number',
      placeholder: '请输入交易量',
    },
  ];
});
</script>

<style lang="scss" scoped>
.body {
  width: 100%;
}
</style>
