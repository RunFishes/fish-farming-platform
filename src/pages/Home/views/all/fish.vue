<template>
  <div class="body">
    <Head
      :bread-list="{
        value: '中央管理模块',
        children: {
          value: '鱼类管理',
        },
      }"
    />
    <CommonTable
      :form-list="formList"
      :table-column="columns"
      :increase-form-list="increaseFormList"
      :get-data="getFishInfo"
      :increase-data="addFishInfo"
      :update-data="updateFish"
      :delete-data="deleteFish"
      @refresh="getChartData"
    />
    <div class="chart">
      <roundChart
        style="height: 400px; width: 400px"
        :data="chartData"
      ></roundChart>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Head from '../../components/Head.vue';
import CommonTable from '@/components/CommonTable.vue';
import {
  getFishInfo,
  addFishInfo,
  updateFish,
  deleteFish,
} from '@/request/fish';
import { getFishList } from '@/request/pond';

import roundChart from '@/components/roundShape.vue';

const chartData = ref([]);

const formList = ref([
  {
    label: '鱼的种类',
    key: 'fishType',
    placeholder: '请输入鱼类',
  },
  {
    label: '操作员',
    key: 'operator',
    placeholder: '请输入操作员',
  },
]);

const columns = ref([
  {
    label: '鱼的种类',
    key: 'fishType',
  },
  {
    label: '引入时间',
    key: 'leadTime',
  },
  {
    label: '数量/条',
    key: 'quantity',
  },
  {
    label: '更新人',
    key: 'updator',
  },
  {
    label: '操作员',
    key: 'operator',
  },
]);

const increaseFormList = ref([
  {
    label: '鱼的种类',
    key: 'fishType',
    placeholder: '选择鱼的种类',
    updateDisabled: true,
  },
  {
    label: '引入时间',
    key: 'leadTime',
    type: 'date',
    placeholder: '请选择引入时间',
  },
  {
    label: '数量/条',
    key: 'quantity',
    placeholder: '请输入鱼类数量',
    type: 'number',
  },
]);

const getChartData = async () => {
  const data = await getFishList();
  chartData.value = data.map((item) => ({
    name: item.fishType,
    value: item.quantity,
  }));
};

onMounted(() => {
  getChartData();
});
</script>

<style lang="scss" scoped>
.body {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.chart {
  margin-top: 20px;
  display: flex;
  justify-content: center;
}
</style>
