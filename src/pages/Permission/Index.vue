<template>
    <component :is="render"></component>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router';
import noFound from './components/404.vue'
import errorPage from './components/403.vue'
import noPermission from './components/401.vue'

const route = useRoute()
console.log(route)

const render = computed(() => {
    switch (route.query.type) {
        case '404':
            return noFound
        case '403':
            return errorPage
        case '401':
            return noPermission
        default:
            return noFound
    }
})

</script>

<style scoped lang="scss"></style>