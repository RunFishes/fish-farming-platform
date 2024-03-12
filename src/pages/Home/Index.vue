<template>
  <div class="home">
    <top-bar></top-bar>
    <div class="content-wrap">
      <el-menu
        router
        active-text-color="#ffd04b"
        background-color="#545c64"
        class="el-menu-vertical"
        default-active="culture"
        text-color="#fff"
        :collapse="isCollapse"
      >
        <el-menu-item @click="isCollapse = !isCollapse">
          <el-icon>
            <Expand v-show="isCollapse"></Expand>
            <Fold v-show="!isCollapse"></Fold>
          </el-icon>
          <template #title>淡海水养殖管理平台</template>
        </el-menu-item>
        <el-sub-menu v-for="item in menuList" :index="item.index">
          <template #title>
            <component
              style="width: 18px; height: 18px"
              :is="item.icon"
            ></component>
            <span>{{ item.name }}</span>
          </template>
          <el-menu-item v-for="ele in item.children" :index="ele.index">
            <component
              style="width: 18px; height: 18px"
              :is="ele.icon"
            ></component>
            <span>{{ ele.name }}</span>
          </el-menu-item>
        </el-sub-menu>
        <el-menu-item index="/visualization">
          <template #title>
            <el-icon><DataBoard /></el-icon>
            <span>大数据看板</span>
          </template>
        </el-menu-item>
      </el-menu>
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { ElMenu, ElMenuItem, ElIcon, ElSubMenu } from 'element-plus';
import TopBar from './components/TopBar.vue';
import { menuList } from './meta/data';

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
      width: 20vw;
      .menu-head {
        display: flex;
        justify-content: center;
      }
    }
  }
}
</style>
