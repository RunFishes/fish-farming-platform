<template>
  <div class="body">
    <ElSelect
      style="width: 150px"
      :placeholder="props.selectPlaceholder || '请选择'"
      :multiple="false"
      v-model="selectedKey"
      @change="change"
    >
      <ElOption
        v-for="opt in list || []"
        :key="opt.selectValue"
        :label="opt.label"
        :value="opt.selectValue"
      />
    </ElSelect>
    <ElInput v-model="inputValue"></ElInput>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue';
import { ElInput, ElSelect, ElOption } from 'element-plus';

// const init = [
//   {
//     value: [
//       {
//         label: '',
//         selectValue: '',
//         inputValue: '',
//       },
//     ],
//   },
// ];

const props = defineProps({
  selectPlaceholder: {
    type: String,
    default: '请选择',
  },
  inputPlaceholder: {
    type: String,
    default: '请输入',
  },
  defaultList: {
    type: Array,
    default: [],
  },
  filterList: {
    type: Array,
    default: [],
  },
});

const list = defineModel('list', {
  type: Array,
  required: true,
});

const index = ref(0);

const change = (val = null) => {
  list.value.forEach((item, i) => {
    if (item.selectValue == val) index.value = i;
  });
};

const selectedKey = ref(0);
const inputValue = ref('');

watch(
  () => [index.value, inputValue.value],
  (newValue, oldValue) => {
    list.value[oldValue[0]].inputValue = newValue[1] || '';
    inputValue.value = list.value[newValue[0]].inputValue || '';
  }
);

const deduplication = (target, def) => {
  const set = new Set();
  target.forEach((item) => {
    set.add(item.selectValue);
  });
  const filterList = def.filter((item) => {
    if (set.has(item.selectValue)) return false;
    return true;
  });
  let lastList = [...target, ...filterList];
  console.log(lastList);
  // lastList = lastList.filter((item) => {
  //   if (props.filterList.includes(item.selectValue)) return true;
  //   return false;
  // });
  return lastList || [];
};

onMounted(() => {
  list.value = deduplication(list.value, props.defaultList);
  selectedKey.value = list.value[0]?.selectValue || '';
  inputValue.value = list.value[0]?.inputValue || '';
});
</script>

<style lang="scss" scoped>
.body {
  display: flex;
  gap: 12px;
}
</style>
