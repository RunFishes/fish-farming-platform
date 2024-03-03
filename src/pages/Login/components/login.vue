<template>
   <div class="loginBox">
        <el-form>
            <p class="title">登陆</p>
            <el-form-item label="账号" class="item">
                <el-input v-model="loginForm.account" placeholder="请输入帐号"></el-input>
            </el-form-item>
            <el-form-item label="密码" class="item">
                <el-input v-model="loginForm.password" placeholder="请输入密码"></el-input>
            </el-form-item>
        </el-form>
   </div> 
</template>

<script setup>
import { reactive } from 'vue';


const loginForm = reactive({
    account:undefined,
    password:undefined
}) 

</script>


<style lang="scss" scoped>
    .loginBox {
        height:500px;
        width: 350px;
        border-radius: 10px;
        border: 1px solid rgba(2, 2, 2, 0.5);
        .title {
            font-size: 20px;
            font-weight: 700;
        }
        .item {
            width: 200px;
        }
    }
</style>