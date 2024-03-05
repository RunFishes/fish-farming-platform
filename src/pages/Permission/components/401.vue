<template>
    <div class="error-page">
        <div class="error-code">4<span>0</span>1</div>
        <div class="error-desc">用户权限不足，请登陆后重试或切换账号</div>
        <div class="error-handle">
            <router-link to="/">
                <el-button @click="" type="primary" style="color: skyblue;" size="large">返回首页</el-button>
            </router-link>
            <el-button class="error-btn" type="primary" style="color: skyblue;" size="large"
                @click="goBack">返回上一页</el-button>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
const goBack = () => {
    router.go(-1);
};
</script>

<style scoped>
.error-page {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    background: #f3f3f3;
    box-sizing: border-box;
}

.error-code {
    line-height: 1;
    font-size: 250px;
    font-weight: bolder;
    color: #2d8cf0;
}

.error-code span {
    color: #00a854;
}

.error-desc {
    font-size: 30px;
    color: #777;
}

.error-handle {
    margin-top: 30px;
    padding-bottom: 200px;
}

.error-btn {
    margin-left: 100px;
}
</style>