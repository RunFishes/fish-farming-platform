<template>
  <div class="commonForm">
    <ElForm
      ref="form"
      class="formBody"
      :model="formState"
      @submit.prevent="submit"
    >
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
        <div v-else-if="item.type === 'number'">
          <ElInputNumber
            :placeholder="item.placeholder || '请选择'"
            v-model="formState[item.key]"
            :style="{ width: `${item.width || 180}px` }"
            :max="item.max || 100000000"
          ></ElInputNumber>
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
      <ElButton @click="increaseRowData" v-if="props.isAddShow">
        导入数据
      </ElButton>
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
          #default="scope"
        >
          <p v-if="!Array.isArray(scope.row[column.key])">
            {{
              column?.customRender
                ? column.customRender(scope.row[column.key])
                : scope.row[column.key]
            }}
          </p>
          <div v-else>
            <div v-if="column.type === 'line'">
              <LineChart
                style="width: 180px; height: 180px; box-sizing: border-box"
                :data="scope.row[column.key]"
              />
            </div>
            <p v-else v-for="ele in scope.row[column.key]" :key="ele">
              {{ column?.customRender ? column.customRender(ele) : ele }}
            </p>
          </div>
        </ElTableColumn>
        <ElTableColumn label="操作">
          <template #default="scope">
            <ElButton
              link
              type="success"
              @click="updateRowData(scope.row)"
              v-if="props.isUpdateShow"
            >
              修改
            </ElButton>
            <ElButton
              link
              type="danger"
              @click="deleteItem(scope.row)"
              v-if="props.isDeleteShow"
            >
              删除
            </ElButton>
          </template>
        </ElTableColumn>
      </ElTable>
      <ElPagination
        style="margin-top: 12px"
        @change="submit"
        :page-sizes="[10, 20, 30, 50]"
        :total="state.page.total"
        v-model:current-page="state.page.current"
        layout="jumper, prev, pager, next,sizes,total"
        v-model:page-size="state.page.pageSize"
      />
    </slot>
    <ElDialog destroy-on-close v-model="increaseShow" width="400" center>
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
                :disabled="
                  increasseType === 'add'
                    ? item?.addDisabled || false
                    : item.updateDisabled || false
                "
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
                :disabled="
                  increasseType === 'add'
                    ? item?.addDisabled || false
                    : item.updateDisabled || false
                "
                :placeholder="item.placeholder || '请选择'"
                v-model="increaseState[item.key]"
                :style="{ width: `${item.width || 300}px` }"
                value-format="YYYY-MM-DD"
              />
            </div>
            <div v-else-if="item.type === 'selectAndInput'">
              <SelectAndInput
                :input-placeholder="item.inputPlaceholder || '请输入'"
                :selectPlaceholder="item.selectPlaceholder || '请选择'"
                :default-list="item.defaultList || []"
                v-model:list="increaseState[item.key]"
                :filter-list="item.filterList || []"
              />
            </div>
            <div v-else-if="item.type === 'number'">
              <ElInputNumber
                :disabled="
                  increasseType === 'add'
                    ? item?.addDisabled || false
                    : item.updateDisabled || false
                "
                :placeholder="item.placeholder || '请选择'"
                v-model="increaseState[item.key]"
                :style="{ width: `${item.width || 180}px` }"
                :max="item.max || 100000000"
              ></ElInputNumber>
            </div>
            <div v-else>
              <ElInput
                :disabled="
                  increasseType === 'add'
                    ? item?.addDisabled || false
                    : item?.updateDisabled || false
                "
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
        <ElButton
          style="background-color: rgb(64, 158, 255); color: white"
          @click="increaseItem"
        >
          确定
        </ElButton>
      </template>
    </ElDialog>
  </div>
</template>

<script setup>
import { ref, onMounted, toRaw } from 'vue';
import { getDefaultValue, copyValue } from '../utils/getDefaultValue';
import SelectAndInput from './SelectAndInput.vue';
import LineChart from './LineChart.vue';
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
  ElPagination,
  ElInputNumber,
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
  //控制添加按钮的显示
  isAddShow: {
    type: Boolean,
    default: true,
  },
  //控制修改按钮的显示
  isUpdateShow: {
    type: Boolean,
    default: true,
  },
  isDeleteShow: {
    type: Boolean,
    default: true,
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
  //修改数据
  updateData: {
    type: Function,
    default: async (params) =>
      new Promise((res, rej) => {
        console.log(params);
        return res({
          success: true,
          code: 200,
          message: '修改数据成功',
        });
      }),
  },
});

const state = ref({
  data: [],
  page: {
    pageSize: 10,
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
    copyValue(item.defaultValue) || getDefaultValue(item.formType);
});

const submit = async () => {
  loading.value = true;
  const params = toRaw(formState.value || {});

  const res = await props.getData({
    params,
    page: state.value.page,
  });
  state.value.data = res.data || [];
  state.value.page = res.page;
  if (res) {
    state.value = res;
  }

  setTimeout(() => {
    loading.value = false;
  }, 300);
};

const increaseForm = ref(null);
const increaseState = ref({});
const increaseShow = ref(false);
let increasseType = ref('add');

//increaseState初始化
props.increaseFormList.forEach((item) => {
  increaseState.value[item.key] =
    copyValue(item.defaultValue) || getDefaultValue(item.formType);
  console.log('***', increaseState.value);
});

const updateRowData = (row) => {
  increasseType.value = 'update';
  Object.keys(row).forEach((item) => {
    increaseState.value[item] = row[item];
  });
  increaseShow.value = true;
};

const increaseRowData = () => {
  increasseType.value = 'add';
  //increaseState初始化
  props.increaseFormList.forEach((item) => {
    increaseState.value = {};
    increaseState.value[item.key] =
      copyValue(item.defaultValue) || getDefaultValue(item.formType);
    console.log(increaseState.value);
  });
  increaseShow.value = true;
};

const increaseItem = async () => {
  const params = toRaw(increaseState.value || {});
  console.log(params);
  if (increasseType.value === 'add') {
    await props.increaseData(params);
  } else {
    await props.updateData(params);
  }
  increaseShow.value = false;
  submit();
};

const deleteItem = async (row) => {
  const res = await props.deleteData(row);
  submit();
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
