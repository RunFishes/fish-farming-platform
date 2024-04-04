<template>
  <div class="body">
    <Head
      :bread-list="{
        value: '饲料管理模块',
        children: {
          value: '饲料投喂记录',
        },
      }"
    />
    <CommonTable :form-list="formList" />
  </div>
</template>

<script lang="ts" setup>
import { ref, onBeforeMount } from 'vue';
import CommonTable from '@/components/CommonTable.vue';
import Head from '../../components/Head.vue';

const formList = ref([]);

const columns = ref([]);

const increaseFormList = ref([]);

onBeforeMount(() => {
  columns.value = [
    {
      label: '喂养记录编号',
      key: 'feedRecordId',
    },
    {
      label: '饲料名称',
      key: 'feedName',
    },
    {
      label: '喂养量',
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
});
</script>

<style lang="scss" scoped></style>
