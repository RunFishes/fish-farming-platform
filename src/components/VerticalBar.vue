<template>
  <div>
    <div>【水产生产占用比】</div>
    <div ref="target" class="w-full h-full"></div>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue';
import * as echarts from 'echarts';
import { getFishList } from '@/request/pond';

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});

const target = ref(null);
let mChart = null;
let fishList = [];
let fishQuantityList = [];

onMounted(async () => {
  const data = await getFishList();
  fishList = data.map((item) => item.fishType);
  const total = data.reduce((acc, cur) => acc + cur.quantity, 0);
  fishQuantityList = data.map((item) => ({
    id: item._id,
    name: item.fishType,
    value: parseInt((item.quantity / total) * 100, 10),
  }));
  console.log(fishQuantityList);

  mChart = echarts.init(target.value);
  renderChart();
});

const renderChart = () => {
  const options = {
    // X 轴展示选项
    xAxis: {
      type: 'category',
      // 根据根据服务端数据筛选
      data: fishList,
      // 文字色值
      axisLabel: {
        color: '#9EB1C8',
      },
    },
    // Y 轴展示数据
    yAxis: {
      // 数据展示
      type: 'value',
      // 不显示轴
      show: false,
      // 最大值（防止触顶）
      max: function (value) {
        // 取整
        return parseInt(value.max * 1.2);
      },
    },
    // echarts 网格绘制的位置，对应 上、右、下、左
    grid: {
      top: 16,
      right: 0,
      bottom: 26,
      left: -26,
      // 计算边距时，包含标签
      containLabel: true,
    },
    // 柱形图核心配置
    series: {
      // 柱形图
      type: 'bar',
      // 数据筛选
      data: fishQuantityList,
      // 每个轴的样式
      itemStyle: {
        color: '#479AD3', // 设置柱子的颜色
        barBorderRadius: 5, // 设置柱子的圆角
        shadowColor: 'rgba(0, 0, 0, 0.3)', // 设置柱子的阴影颜色
        shadowBlur: 5, // 设置柱子的阴影模糊大小
      },
      // 柱子宽度
      barWidth: 12,
      // 文本
      label: {
        show: true,
        // 设置标签位置为右侧
        position: 'top',
        textStyle: {
          // 设置标签文本颜色
          color: '#fff',
        },
        formatter: '{c}%',
      },
    },
  };

  mChart.setOption(options);
};
</script>

<style lang="scss" scoped></style>
