<template>
  <div ref="round" class="w-full h-full"></div>
</template>

<script setup>
import * as echarts from 'echarts';
import { ref, onMounted, watch } from 'vue';

const props = defineProps({
  // {
  //   name:'名字',
  //   value:''
  // }
  data: {
    type: Array,
    default: [],
  },
  title: {
    type: String,
    default: '',
  },
  name: {
    type: String,
    default: '',
  },
});

const round = ref();

const render = () => {
  const option = {
    title: {
      text: props.title,
      left: 'center',
    },
    tooltip: {
      trigger: 'item',
    },
    legend: {
      orient: 'vertical',
      left: 'left',
    },
    series: [
      {
        name: props.name,
        type: 'pie',
        radius: '50%',
        data: props.data,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },
        },
      },
    ],
  };
  // const option = {
  //   title: {
  //     text: props.title,
  //     left: 'center',
  //   },
  //   series: [
  //     {
  //       type: 'pie',
  //       radius: '50%',
  //       name: props.name,
  //       data: props.data,
  //       emphasis: {
  //         itemStyle: {
  //           shadowBlur: 10,
  //           shadowOffsetX: 0,
  //           shadowColor: 'rgba(0, 0, 0, 0.5)',
  //         },
  //       },
  //     },
  //   ],
  // };
  const roundChart = echarts.init(round.value);
  roundChart.setOption(option);
};

onMounted(() => {
  watch(
    () => props.data,
    () => {
      render();
    },
    {
      immediate: true,
    }
  );
});
</script>

<style lang="scss" scoped></style>
