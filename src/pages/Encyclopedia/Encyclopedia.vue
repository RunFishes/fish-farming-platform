<template>
  <div class="container">
    <Head
      :bread-list="{
        value: '鱼类百科大全',
      }"
    />
    <div class="searchBox">
      <ElInput
        v-model="searchInput"
        class="inputBox"
        placeholder="请输入你要搜索的鱼类"
      />
      <ElButton
        @click="search"
        style="background-color: rgb(64, 158, 255); color: white"
      >
        搜索
      </ElButton>
    </div>
    <div class="list">
      <div class="left"></div>
      <div class="center">
        <ElCard
          v-for="item in list"
          :key="item._id"
          class="cardItem"
          @click="showDetail(item._id)"
        >
          <img :src="item.fishImage" style="width: 150px; height: 150px" />
          <span>{{ item.fishName }}</span>
        </ElCard>
      </div>
      <div class="right"></div>
    </div>
  </div>
</template>

<script setup>
import { ElInput, ElButton, ElCard } from 'element-plus';
import { ref, onMounted } from 'vue';
import Head from '../Home/components/Head.vue';
import { getEncyclopediaList } from '@/request/encyclopedia';
import { useRouter } from 'vue-router';

const searchInput = ref('');
const list = ref([]);
const router = useRouter();

const search = async () => {
  list.value = await getEncyclopediaList({
    fishName: searchInput.value,
  });
};

const showDetail = async (id) => {
  router.push({
    name: 'encyclopediaDetail',
    query: {
      id,
    },
  });
};

onMounted(async () => {
  search();
});
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  display: flex;
  flex-direction: column;
  .searchBox {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 70px;
    gap: 12px;
    .inputBox {
      width: 220px;
    }
  }
  .list {
    flex: 1;
    display: flex;
    .left {
      width: 20vw;
      height: 100%;
    }

    .center {
      width: 860px;
      background-color: skyblue;
      border-radius: 12px;
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      padding: 12px;
      .cardItem {
        flex: 25%;
        max-width: 200px;
        min-width: 170px;
        height: 200px;
        display: flex;
        justify-content: center;
        cursor: pointer;
        span {
          width: 150px;
          font-weight: 700;
          text-align: center;
        }
      }
      .cardItem:hover {
        opacity: 0.8;
      }
    }
    .right {
      width: 20vw;
      height: 100%;
    }
  }
}
</style>
