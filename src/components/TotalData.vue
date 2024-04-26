<template>
  <div class="p-6">
    <div class="text-slate-300 text-center">
      水产总量：
      <span
        ref="totalCountTarget"
        class="text-7xl ml-2 mr-2 font-bold font-[Electronic] text-gradient"
      >
        679,473,929
      </span>
      条记录
    </div>
    <div class="mt-4 flex flex-wrap">
      <div
        v-for="item in list"
        class="w-1/4 text-center text-slate-400 text-sm"
      >
        {{ item.fishType }}
        <span
          :ref="item?.node"
          class="text-[#5DC5EF] text-3xl font-[Electronic]"
        >
          {{ item.quantity }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { CountUp } from 'countup.js';
import { getFishList } from '@/request/pond';

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});

const totalCountTarget = ref(null);
const list = ref([]);

onMounted(async () => {
  const data = await getFishList();
  const total = data.reduce((acc, cur) => acc + cur.quantity, 0);
  new CountUp(totalCountTarget.value, total).start();
  list.value = data.map((item) => ({
    node: null,
    fishType: item.fishType,
    quantity: item.quantity,
  }));
});
</script>

<style lang="scss" scoped></style>
