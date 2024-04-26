<template>
  <div class="body">
    <Head
      :bread-list="{
        value: '销售与营销模块',
        children: {
          value: '鱼类销售管理',
        },
      }"
    />
    <CommonTable
      :form-list="formList"
      :table-column="columns"
      :get-data="getSell"
      :increase-data="addSell"
      :delete-data="deleteSell"
      :update-data="updateSell"
      :increase-form-list="increaseFormList"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import CommonTable from '@/components/CommonTable.vue';
import Head from '../../components/Head.vue';
import { getFishList } from '@/request/pond';
import { getSell, updateSell, addSell, deleteSell } from '@/request/sell';
import { getCustomList } from '@/request/custom';

const formList = ref([]);

const columns = ref([]);

const increaseFormList = ref([]);

onMounted(async () => {
  const data = await getFishList();
  const fishList = data?.length
    ? data.map((item) => {
        return { label: item.fishType, value: item._id };
      })
    : [];
  const customList = await getCustomList();
  console.log(customList);

  const fishModelList = [
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

  formList.value = [
    {
      label: '出售鱼类',
      key: 'fishId',
      type: 'select',
      options: fishList,
      placeholder: '请选择出售鱼类',
    },
    {
      label: '鱼类规格型号',
      key: 'fishModel',
      type: 'select',
      placeholder: '请选择鱼类规格型号',
      options: fishModelList,
    },
    {
      label: '出售日期',
      key: 'sellTime',
      type: 'date',
      placeholder: '请选择出售日期',
    },
    {
      label: '客户',
      key: 'custom',
      type: 'select',
      options: customList,
      placeholder: '请选择客户',
    },
  ];

  columns.value = [
    {
      label: '出售ID',
      key: '_id',
    },
    {
      label: '出售鱼类',
      key: 'fishName',
    },
    {
      label: '鱼类规格型号',
      key: 'fishModel',
      placeholder: '请输入规格型号',
      customRender: (data) => {
        return (
          fishModelList.find((item) => {
            return item.value === data;
          })?.label || '未存该规格型号'
        );
      },
    },
    {
      label: '出售量/kg',
      key: 'sellQuantity',
    },
    {
      label: '出售价格/元',
      key: 'sellPrice',
    },
    {
      label: '出售日期',
      key: 'sellTime',
    },
    {
      label: '订单预计/实际完成时间',
      key: 'orderFinishTime',
    },
    {
      label: '客户名称',
      key: 'custom',
      customRender: (data) => {
        return (
          customList.find((item) => {
            return item.value === data;
          })?.label || '未存在该客户名称'
        );
      },
    },
    {
      label: '操作人',
      key: 'operator',
    },
  ];
  increaseFormList.value = [
    {
      label: '出售鱼类',
      key: 'fishId',
      type: 'select',
      options: fishList,
      placeholder: '请输入出售鱼类',
    },
    {
      label: '鱼类规格型号',
      key: 'fishModel',
      type: 'select',
      options: fishModelList,
      placeholder: '请输入饲料喂养量',
    },
    {
      label: '出售量/kg',
      type: 'number',
      key: 'sellQuantity',
      placeholder: '请输入出售量/kg',
    },
    {
      label: '出售价格/元',
      key: 'sellPrice',
      type: 'number',
      placeholder: '请输入出售价格/元',
    },
    {
      label: '出售日期',
      type: 'date',
      key: 'sellTime',
      placeholder: '请输入出售日期',
    },
    {
      label: '订单预计/实际完成时间',
      type: 'date',
      key: 'orderFinishTime',
      placeholder: '请输入订单预计/实际完成时间',
    },
    {
      label: '客户名称',
      key: 'custom',
      type: 'select',
      options: customList,
      placeholder: '请输入客户名称',
    },
  ];
});
</script>

<style lang="scss" scoped>
.body {
  flex: 1;
  width: 50%;
}
</style>
