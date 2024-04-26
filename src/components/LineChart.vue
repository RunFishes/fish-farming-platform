<template>
  <div class="w-full h-full" ref="line"></div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import * as echarts from 'echarts';

const props = defineProps({
  data: {
    type: Array,
    default: [],
  },
  title: {
    type: String,
    default: '',
  },
});

const line = ref('');

const renderOptions = () => {
  const [x, y] = props.data.length ? Object.keys(props.data[0]) : ['x', 'y'];
  const option = {
    title: {
      text: props.title,
    },
    xAxis: {
      type: 'category',
      data: props.data.map((item) => item[x]),
    },
    yAxis: {
      type: 'value',
      grid: {
        show: true,
        left: '10%',
      },
    },
    series: [
      {
        data: props.data.map((item) => item[y]),
        type: 'line',
        smooth: true,
      },
    ],
  };
  const myChart = echarts.init(line.value);
  myChart.setOption(option);
};

onMounted(() => {
  console.log(line.value.children.children);
  watch(
    () => props.data,
    () => {
      renderOptions();
    },
    {
      immediate: true,
    }
  );
});
</script>

<style lang="scss" scoped></style>
