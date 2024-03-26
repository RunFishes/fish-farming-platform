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
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Head from '../../components/Head.vue';
import CommonTable from '@/components/CommonTable.vue';
const formList = ref([
  {
    label: '池塘',
    key: 'pondId',
    type: 'select',
    placeholder: '请选择池塘',
    options: [],
  },
  {
    label: '鱼的种类',
    key: 'fishType',
    type: 'select',
    placeholder: '选择鱼的种类',
    options: [],
  },
]);

const columns = ref([
  {
    label: '池塘',
    key: 'pondId',
  },
  {
    label: '鱼的种类',
    key: 'fishType',
  },
  {
    label: '放养数量',
    value: 'freeQuantity',
  },
  {
    label: '操作员',
    key: 'operation',
  },
]);

const increaseFormList = [
  {
    key:'pondId',
    label:'池塘',
    type:'select',
    placeholder:'请选择池塘',
    options:[]
  },
  {
    key:'fishAll',
    label:'鱼类数量',
    inputPlaceholder:'请输入鱼类数量',
    selectPlaceholder:'请输入鱼类',
    type:'selectAndInput',
    defaultValue:[
      {
        label: '海鱼',
        selectValue: '1',
        inputValue: 222,
      },
    ]
  }
];
</script>

<style lang="scss" scoped>
.body {
  display: flex;
  flex-direction: column;
  width: 100%;
}
</style>
