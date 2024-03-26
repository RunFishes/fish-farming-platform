<template>
  <el-affix :offset="0">
    <div class="topBar py-5 px-12">
      <div class="logo">
        <img
          class="object-cover"
          src="../../../assets/imgs/fish.png"
          style="width: 35px; height: 35px; border-radius: 20%"
          alt="logo"
        />
        <p>淡海水养殖管理平台</p>
      </div>
      <div class="user">
        <ElDropdown>
          <img
            style="
              width: 30px;
              height: 30px;
              border-radius: 50%;
              cursor: pointer;
            "
            src="../../../assets/imgs/user.jpg"
            alt="user"
          />
          <template #dropdown>
            <el-dropdown-menu
              style="display: flex; flex-direction: column; gap: 12px"
            >
              <el-dropdown-item class="dropItem" @click="goLogin">
                切换账号
              </el-dropdown-item>
              <el-dropdown-item class="dropItem" @click="goLogin">
                注销
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </ElDropdown>
        <p>欢迎来到淡海水鱼养殖平台</p>
      </div>
    </div>
    <el-divider class="p-0 m-0" />
  </el-affix>
</template>

<script setup>
import { ElAffix, ElDivider, ElDropdown } from 'element-plus';
import { useRouter } from 'vue-router';

const router = useRouter();

const goLogin = () => {
  router.push('/login');
};
console.log('2333');
</script>

<style lang="scss" scoped>
.topBar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  background-color: rgb(84, 92, 100);
  .logo {
    display: flex;
    align-items: center;
    gap: 5px;
    p {
      font-weight: 700;
      color: rgb(61, 141, 196);
    }
  }
  .user {
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 5px;
    p {
      color: white;
    }
  }
}

.dropItem {
  font-size: 14px;
  line-height: 20px;
  padding: 4px 12px;
  text-align: center;
  font-weight: 400;
  cursor: pointer;
}
.dropItem:hover {
  background-color: rgb(168, 168, 168);
}
</style>
