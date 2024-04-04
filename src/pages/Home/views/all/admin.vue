<template>
  <div class="body">
    <Head
      :bread-list="{
        value: '中央管理模块',
        children: {
          value: '权限管理',
        },
      }"
    />
    <CommonTable
      :form-list="formList"
      :table-column="columns"
      :is-add-show="false"
      :increase-form-list="increaseFormList"
      :get-data="getAdminInfo"
      :update-data="updatePermissions"
      :is-delete-show="false"
    />
  </div>
</template>

<script setup>
import { ref, onBeforeMount } from 'vue';
import Head from '../../components/Head.vue';
import CommonTable from '@/components/CommonTable.vue';
import {
  getAdminInfo,
  updatePermissions,
  getPermissions,
} from '@/request/admin';

const formList = ref([]);

const columns = ref([]);

const increaseFormList = ref([]);

onBeforeMount(async () => {
  const permissionsList = await getPermissions();
  console.log(permissionsList);

  formList.value = [
    {
      label: '用户名',
      key: 'name',
      placeholder: '请输入用户名',
    },
    {
      label: '邮箱',
      key: 'email',
    },
  ];

  columns.value = [
    {
      label: '用户名',
      key: 'name',
    },
    {
      label: '权限列表',
      key: 'permissions',
      customRender: (data) => {
        return (
          permissionsList.find((val) => {
            if (val.value === data) return true;
          })?.label || ''
        );
      },
    },
    {
      label: '邮箱',
      key: 'email',
    },
  ];

  increaseFormList.value = [
    {
      key: 'name',
      label: '用户名',
      addDisabled: true,
    },
    {
      isMutiple: true,
      key: 'permissions',
      label: '权限控制',
      placeholder: '请选择你要添加的权限',
      type: 'select',
      options: permissionsList,
      defaultValue: [],
    },
  ];
});
</script>

<style lang="scss" scoped>
.body {
  width: 100%;
}
</style>
