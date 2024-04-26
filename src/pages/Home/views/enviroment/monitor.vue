<template>
  <div class="body">
    <Head
      :bread-list="{
        value: '养殖环境控制模块',
        children: {
          value: '环境参数监测',
        },
      }"
    />
    <ElSelect
      v-model="id"
      placeholder="选择相应的池塘"
      style="width: 200px; margin: 8px"
    >
      <ElOption
        v-for="item in pondIds || []"
        :label="item.pondName"
        :key="item._id"
        :value="item._id"
      ></ElOption>
    </ElSelect>
    <div class="lineList">
      <div class="line" ref="temperature"></div>
      <div class="line" ref="humidity"></div>
    </div>
  </div>
</template>

<script setup>
import { ElSelect, ElOption } from 'element-plus';
import { ref, onBeforeMount, watch } from 'vue';
import Head from '../../components/Head.vue';
import { getPond } from '@/request/pond';
import * as echarts from 'echarts';
import { getEnviromentDetail } from '@/request/enviroment';
import dayjs from 'dayjs';
const id = ref('');
const pondIds = ref([]);

const temperature = ref();
const humidity = ref();

const lineList = ref({
  temperature: [],
  humidity: [],
});

const temperatureRender = () => {
  const temperatureOptions = {
    title: {
      text: '温度检测',
    },
    tooltip: {
      trigger: 'axis',
    },
    legend: {},
    toolbox: {
      show: true,
      feature: {
        dataView: { readOnly: false },
        magicType: { type: ['line', 'bar'] },
        restore: {},
        saveAsImage: {},
      },
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: lineList.value.temperature.map((item) =>
        dayjs(item.time).format('YYYY-MM-DD HH:mm:ss')
      ),
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        formatter: '{value} °C',
      },
    },
    series: [
      {
        name: '温度',
        type: 'line',
        data: lineList.value.temperature.map((item) => item.temperature),
        markPoint: {
          data: [
            { type: 'max', name: 'Max' },
            { type: 'min', name: 'Min' },
          ],
        },
        markLine: {
          data: [{ type: 'average', name: 'Avg' }],
        },
      },
    ],
  };
  const temperatureChart = echarts.init(temperature.value);
  temperatureChart.setOption(temperatureOptions);
};

const humidityRender = () => {
  const humidityOptions = {
    title: {
      text: '湿度检测',
    },
    tooltip: {
      trigger: 'axis',
    },
    legend: {},
    toolbox: {
      show: true,
      feature: {
        dataView: { readOnly: false },
        magicType: { type: ['line', 'bar'] },
        restore: {},
        saveAsImage: {},
      },
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: lineList.value.humidity.map((item) =>
        dayjs(item.time).format('YYYY-MM-DD HH:mm:ss')
      ),
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        formatter: '{value} %',
      },
    },
    series: [
      {
        name: '湿度',
        type: 'line',
        data: lineList.value.humidity.map((item) => item.humidity),
        markPoint: {
          data: [
            { type: 'max', name: 'Max' },
            { type: 'min', name: 'Min' },
          ],
        },
        markLine: {
          data: [{ type: 'average', name: 'Avg' }],
        },
      },
    ],
  };
  const humidityChart = echarts.init(humidity.value);
  humidityChart.setOption(humidityOptions);
};

const render = async () => {
  // const data = await getEnviromentList(id.value);
  temperatureRender();
  humidityRender();
};

watch(
  () => id.value,
  async () => {
    const data = await getEnviromentDetail({ id: id.value });
    lineList.value.temperature = data?.temperature || [];
    lineList.value.humidity = data?.humidity || [];
    console.log(lineList.value);
    render();
  }
);

onBeforeMount(async () => {
  pondIds.value = await getPond({});
  id.value = pondIds.value[0]?._id || '';
});
</script>

<style lang="scss" scoped>
.body {
  width: 100%;
  flex: 1;
}
.lineList {
  padding: 12px;
  .line {
    height: 400px;
  }
  span {
    font-weight: 700;
    font-size: 24px;
  }
}
</style>
