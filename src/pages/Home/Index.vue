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
      >
        <el-sub-menu v-for="item in menuList" :index="item.index">
          <template #title>
            <div class="menu-item">
              <component
                style="width: 18px; height: 18px"
                :is="item.icon"
              ></component>
              <span>{{ item.name }}</span>
            </div>
          </template>
          <el-menu-item v-for="ele in item.children" :index="ele.index">
            <div class="menu-item">
              <component
                style="width: 18px; height: 18px"
                :is="ele.icon"
              ></component>
              <span>{{ ele.name }}</span>
            </div>
          </el-menu-item>
        </el-sub-menu>
        <el-menu-item index="/visualization">
          <el-icon style="width: 18px; height: 18px"><DataBoard /></el-icon>
          <span>大数据看板</span>
        </el-menu-item>
      </el-menu>
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import {
  ElMenu,
  ElMenuItem,
  ElIcon,
  ElSubMenu,
  ElMenuItemGroup,
} from 'element-plus';
import TopBar from './components/TopBar.vue';
import { menuList } from './meta/data';
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

    .el-menu-vertical {
      width: 20vw;
    }
  }
}

.menu-item {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5px;
}
</style>
