<template>
  <div class="commonForm">
    <ElForm ref="form" class="formBody" :model="formState">
      <ElFormItem
        v-for="item in props.formList"
        :key="item.key"
        :label="item.label + ':' || ''"
        :prop="item.key"
      >
        <div v-if="item.type === 'select'">
          <ElSelect
            :placeholder="item.placeholder || '请选择'"
            v-model="formState[item.key]"
            :multiple="item.isMutiple || false"
            :style="{ width: `${item.width || 180}px` }"
          >
            <ElOption
              v-for="opt in item.options || []"
              :key="opt.value"
              :label="opt.label"
              :value="opt.value"
            />
          </ElSelect>
        </div>
        <div v-else-if="item.type === 'date'">
          <ElDatePicker
            :placeholder="item.placeholder || '请选择'"
            v-model="formState[item.key]"
            :style="{ width: `${item.width || 180}px` }"
            value-format="YYYY-MM-DD"
          />
        </div>
        <div v-else>
          <ElInput
            :placeholder="item.placeholder || '请输入'"
            v-model="formState[item.key]"
            :style="{ width: `${item.width || 180}px` }"
          />
        </div>
      </ElFormItem>
      <ElButton
        @click="submit"
        style="background-color: rgb(64, 158, 255); color: white"
      >
        查询
      </ElButton>
      <ElButton @click="increaseShow = true">导入数据</ElButton>
    </ElForm>
    <slot name="table">
      <ElTable
        v-loading="loading"
        :data="state.data"
        style="width: 100%; margin-top: 20px"
      >
        <ElTableColumn
          :prop="column.key"
          v-for="column in props.tableColumn"
          :min-width="column.width || '120'"
          :label="column.label"
        />
        <ElTableColumn label="操作">
          <template #default="scope">
            <ElButton type="link" @click="increaseItem(scope)">修改</ElButton>
            <ElButton type="link" @click="deleteItem(scope)">删除</ElButton>
          </template>
        </ElTableColumn>
      </ElTable>
    </slot>
    <ElDialog v-model="increaseShow" width="400" center>
      <ElScrollbar height="400">
        <ElForm ref="increaseForm" :model="increaseState" label-position="top">
          <ElFormItem
            v-for="item in props.increaseFormList"
            :key="item.key"
            :label="item.label + ':' || ''"
            :prop="item.key"
          >
            <div v-if="item.type === 'select'">
              <ElSelect
                :placeholder="item.placeholder || '请选择'"
                v-model="increaseState[item.key]"
                :multiple="item.isMutiple || false"
                :style="{ width: `${item.width || 300}px` }"
              >
                <ElOption
                  v-for="opt in item.options || []"
                  :key="opt.value"
                  :label="opt.label"
                  :value="opt.value"
                />
              </ElSelect>
            </div>
            <div v-else-if="item.type === 'date'">
              <ElDatePicker
                :placeholder="item.placeholder || '请选择'"
                v-model="increaseState[item.key]"
                :style="{ width: `${item.width || 300}px` }"
                value-format="YYYY-MM-DD"
              />
            </div>
            <div v-else-if="item.type === 'selectAndInput'">
              <SelectAndInput
                :input-placeholder="item.inputPlaceholder"
                :selectPlaceholder="item.selectPlaceholder"
                v-model:list="increaseState[item.key]"
              />
            </div>
            <div v-else>
              <ElInput
                :placeholder="item.placeholder || '请输入'"
                v-model="increaseState[item.key]"
                :style="{ width: `${item.width || 300}px` }"
              />
            </div>
          </ElFormItem>
        </ElForm>
      </ElScrollbar>
      <template #footer>
        <ElButton @click="increaseShow = false">取消</ElButton>
        <ElButton style="background-color: rgb(64, 158, 255); color: white">
          确定
        </ElButton>
      </template>
    </ElDialog>
  </div>
</template>

<script setup>
import { ref, onMounted, toRaw } from 'vue';
import { getDefaultValue } from '../utils/getDefaultValue';
import SelectAndInput from './SelectAndInput.vue';
import {
  ElForm,
  ElFormItem,
  ElTable,
  ElTableColumn,
  ElButton,
  ElSelect,
  ElOption,
  ElInput,
  ElDatePicker,
  ElDialog,
  ElScrollbar,
} from 'element-plus';
const props = defineProps({
  // {
  //   label: 对应label名
  //   key:对应属性名
  //   type:对应表单类型  //不带默认input (select date input time(未做))
  //   isMutiple:是否可以多选《只在select里可以用》默认false
  //   options:选项列表《只在select里可以用》
  //   width：对应宽度
  //   formType: 数据类型默认是string
  //   defaultValue: 初始化默认值，没给的话按默认值
  // }
  formList: {
    type: Array,
    default: [],
  },
  // {
  //   key:对应属性名
  //   label:对应表头头部
  //   width:对应宽度
  // }
  tableColumn: {
    type: Array,
    default: [],
  },
  //获取表格函数的接口函数
  // {
  //   success: true | false,
  //   code:200,
  //   data:[] 表格数据  [],
  //   page: {
  //     total:number 总数
  //     pageSizes:number 分页数
  //     current:number 当前页面
  //   }
  // }
  getData: {
    type: Function,
    default: async (params) =>
      new Promise((res, rej) => {
        console.log(params);
        return res({
          success: true,
          code: 200,
          data: [],
          page: {
            pageSizes: 20,
            total: 0,
            current: 1,
          },
        });
      }),
  },
  //添加数据list
  increaseFormList: {
    type: Array,
    default: [],
  },
  //添加数据
  increaseData: {
    type: Function,
    default: async (params) =>
      new Promise((res, rej) => {
        console.log(params);
        return res({
          success: true,
          code: 200,
          message: '添加数据成功',
        });
      }),
  },
  //删除数据
  deleteData: {
    type: Function,
    default: async (params) =>
      new Promise((res, rej) => {
        console.log(params);
        return res({
          success: true,
          code: 200,
          message: '删除数据成功',
        });
      }),
  },
});

const state = ref({
  data: [],
  page: {
    pageSizes: 20,
    total: 0,
    current: 1,
  },
});

const loading = ref(false);

const form = ref(null);
const formState = ref({});
//formState初始化
props.formList.forEach((item) => {
  formState.value[item.key] =
    item.defaultValue || getDefaultValue(item.formType);
});

const increaseForm = ref(null);
const increaseState = ref({});
//increaseState初始化
props.increaseFormList.forEach((item) => {
  increaseState.value[item.key] =
    item.defaultValue || getDefaultValue(item.formType);
});

const increaseShow = ref(false);

const submit = async () => {
  loading.value = true;
  const params = toRaw(formState.value || {});
  const res = await props.getData(params);
  console.log(res);
  setTimeout(() => {
    loading.value = false;
  }, 300);
};

const increaseItem = async () => {
  const params = toRaw(increaseForm.value || {});
  const res = await props.increaseData(params);
};

const deleteItem = async () => {
  console.log('删除数据');
};

onMounted(() => {
  submit();
});
</script>

<style lang="scss" scoped>
.commonForm {
  width: 100%;
  padding: 16px 12px;
  .formBody {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
  }
}
</style>
