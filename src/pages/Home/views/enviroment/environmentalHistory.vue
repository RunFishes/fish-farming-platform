<template>
  <div class="body">
    <Head
      :bread-list="{
        value: '养殖环境控制模块',
        children: {
          value: '环境监测总管理',
        },
      }"
    />
    <CommonTable
      :table-column="columns"
      :form-list="formList"
      :increase-form-list="increaseFormList"
      :get-data="getEnviromentList"
      :increase-data="addEnviroment"
      :update-data="updateEnviroment"
      :delete-data="deleteEnviroment"
    />
  </div>
</template>

<script setup>
import { ref, onBeforeMount } from 'vue';
import Head from '../../components/Head.vue';
import CommonTable from '@/components/CommonTable.vue';
import { getAllPond } from '@/request/pond';
import {
  getEnviromentList,
  addEnviroment,
  updateEnviroment,
  deleteEnviroment,
} from '@/request/enviroment';
const columns = ref([]);
const formList = ref([]);
const increaseFormList = ref([]);

onBeforeMount(async () => {
  const pondOptions = await getAllPond();

  console.log(pondOptions);

  columns.value = [
    {
      label: '池塘',
      key: 'pondName',
    },
    {
      label: '设备接入时间',
      key: 'detectTime',
    },
    {
      label: '检测设备',
      key: 'detectDev',
    },
    {
      label: '备注',
      key: 'remark',
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
  formList.value = [
    {
      label: '池塘名',
      key: 'pondName',
      placeholder: '请输入池塘名',
    },
    {
      label: '检测设备',
      key: 'detectDev',
      placeholder: '请输入检测设备',
    },
  ];
  increaseFormList.value = [
    {
      label: '池塘',
      key: 'pondId',
      placeholder: '请选择池塘',
      type: 'select',
      options: pondOptions,
    },
    {
      label: '检测设备',
      key: 'detectDev',
      placeholder: '请选择检测设备',
    },
    {
      label: '设备接入时间',
      key: 'detectTime',
      placeholder: '请输入设备接入时间',
      type: 'date',
    },
    {
      label: '备注',
      key: 'remark',
      placeholder: '请输入备注',
    },
  ];
});
</script>

<style lang="scss" scoped>
.body {
  width: 100%;
  flex: 1;
}
</style>
