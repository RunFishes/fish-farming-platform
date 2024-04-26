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
      @refresh="render"
    />
    <div class="chart">
      <div
        ref="chart"
        style="width: 1000px; height: 800px"
        :data="chartData"
      ></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onBeforeMount, watch } from 'vue';
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
import * as echarts from 'echarts';

const chart = ref();

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

const render = (data = []) => {
  const yList = data.map((item) => item.pondName);
  const typeList = data.length
    ? data[0].fishAll.map((item) => {
        return {
          name: item.label,
          type: 'bar',
          stack: 'total',
          label: {
            show: true,
          },
          emphasis: {
            focus: 'series',
          },
          data: data.map((dataItem) => {
            console.log(
              dataItem.fishAll.find(
                (fishItem) => fishItem.selectValue === item.selectValue
              )
            );
            return Number(
              dataItem.fishAll.find(
                (fishItem) => fishItem.selectValue === item.selectValue
              )?.inputValue || 0
            );
          }),
        };
      })
    : [];

  console.log(typeList);
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        // Use axis to trigger tooltip
        type: 'shadow', // 'shadow' as default; can also be 'line' or 'shadow'
      },
    },
    legend: {},
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    xAxis: {
      type: 'value',
    },
    yAxis: {
      type: 'category',
      data: yList,
    },
    series: typeList,
  };
  const roundChart = echarts.init(chart.value);
  roundChart.setOption(option);
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
.chart {
  display: flex;
  width: 100%;
  justify-content: center;
}
</style>
