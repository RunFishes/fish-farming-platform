<template>
  <div class="home">
    <top-bar></top-bar>
    <div class="content-wrap">
      <el-menu
        router
        active-text-color="#ffd04b"
        background-color="#545c64"
        class="el-menu-vertical"
        :default-active="route.name"
        text-color="#fff"
        :collapse="isCollapse"
        style="max-width: 240px"
      >
        <el-menu-item @click="isCollapse = !isCollapse">
          <el-icon>
            <Expand v-show="isCollapse"></Expand>
            <Fold v-show="!isCollapse"></Fold>
          </el-icon>
          <template #title>淡海水养殖管理平台</template>
        </el-menu-item>
        <el-sub-menu
          style="width: 100%"
          v-for="item in menuList"
          :index="item.index"
        >
          <template #title>
            <component
              style="width: 18px; height: 18px"
              :is="item.icon"
            ></component>
            <span>{{ item.name }}</span>
          </template>
          <el-menu-item
            v-for="ele in item.children"
            :index="ele.index"
            style="padding-left: 45px"
          >
            <component
              style="width: 18px; height: 18px"
              :is="ele.icon"
            ></component>
            <span>{{ ele.name }}</span>
          </el-menu-item>
        </el-sub-menu>
        <el-menu-item index="/visualization">
          <el-icon><DataBoard /></el-icon>
          <template #title>大数据看板</template>
        </el-menu-item>
      </el-menu>
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { ElMenu, ElMenuItem, ElIcon, ElSubMenu } from 'element-plus';
import TopBar from './components/TopBar.vue';
import { menuList } from './meta/data';

const route = useRoute();

const isCollapse = ref(true);
</script>

<style scoped lang="scss">
* {
  padding: 0;
  margin: 0;
}

.home {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  .content-wrap {
    display: flex;
    flex-direction: row;
    flex: 1;

    .el-menu-vertical:not(.el-menu--collapse) {
      min-width: 250px;
      .menu-head {
        display: flex;
        justify-content: center;
      }
    }
  }
}
</style>
