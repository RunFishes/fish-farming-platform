<template>
    <div class="body">
        <login></login>
    </div>
</template>


<script setup>
import login from './components/login.vue';
</script>


<style lang="scss" scoped>
* {
    padding: 0;
    margin: 0;
}
.body {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>