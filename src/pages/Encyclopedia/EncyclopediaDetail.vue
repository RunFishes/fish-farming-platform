<template>
  <div class="container">
    <div class="body">
      <div class="head">
        <img :src="info.fishImage" alt="" />
        <h1>{{ info.fishName }}</h1>
      </div>
      <div class="description">
        <h1 class="title">描述:</h1>
        <span>
          {{ info.description.join('') }}
        </span>
      </div>
      <div class="list">
        <div v-for="item in info.list">
          <h2 v-if="item.h2Title">{{ item.h2Title }}</h2>
          <h3 v-if="item.h3Title">{{ item.h3Title }}</h3>
          <div v-if="item.infoList.length">
            <span
              v-for="infoItem in item.infoList.filter(
                (item) => !(item.includes('播报') || item.includes('编辑'))
              )"
            >
              {{ infoItem }}
            </span>
          </div>
        </div>
      </div>
      <div class="remark" @click="goBaidu">( 信息均取自于百度百科 )</div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { onMounted, ref } from 'vue';
import { getEncyclopediaDetail } from '@/request/encyclopedia';

const route = useRoute();
const id = route.query.id;

const info = ref({
  fishName: '',
  fishImage: '',
  description: [],
  list: [],
});

const getData = async () => {
  const { fishImage, fishName, description, list } =
    await getEncyclopediaDetail({ id });
  info.value.fishName = fishName;
  info.value.fishImage = fishImage;
  info.value.description = description;
  info.value.list = list;
};

const goBaidu = () => {
  window.location.href = 'https://baike.baidu.com';
};

onMounted(() => {
  getData();
});
</script>

<style lang="scss" scoped>
.container {
  padding: 8px 12px;
  width: 100%;
  display: flex;
  justify-content: center;
  .body {
    width: 700px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    .head {
      display: flex;
      gap: 12px;
      img {
        border-radius: 12px;
        width: 150px;
        height: 150px;
      }
      h1 {
        align-self: flex-end;
        font-weight: 700;
        font-size: 25px;
      }
    }
    .description {
      .title {
        font-weight: 700;
        font-size: 20px;
      }
    }
    .list {
      h2 {
        margin-top: 8px;
        font-weight: 700;
        font-size: 20px;
      }
      h3 {
        font-weight: 600;
        font-size: 16px;
      }
    }
    .remark {
      text-align: right;
      opacity: 0.8;
    }
    .remark:hover {
      cursor: pointer;
      opacity: 0.5;
    }
    .remark:active {
      opacity: 1;
    }
  }
}
</style>
