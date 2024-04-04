<template>
  <div class="w-full font-bold" style="padding: 0px 15px">
    <p class="tracking-widest py-2 text-xl" style="color: rgb(84, 92, 100)">
      {{ breadList.join('/') }}
    </p>
    <ElDivider style="margin: 0px; padding: 0px"></ElDivider>
  </div>
</template>

<script setup>
import { ElDivider } from 'element-plus';
import { defineProps, computed } from 'vue';

const props = defineProps({
  // {
  //   value:'',
  //   children: {
  //     value:'',
  //     children:{}
  //   }
  // }
  breadList: {
    type: Object,
    default: {},
  },
});

const deepObj = (obj, list) => {
  if (obj.children) {
    return deepObj(obj.children, [...list, obj.value]);
  } else {
    return obj.value ? [...list, obj.value] : [...list];
  }
};

const breadList = computed(() => {
  return deepObj(props.breadList, []);
});
</script>

<style lang="scss" scoped></style>
