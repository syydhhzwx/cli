<template>
    <div id="app">
        <h3>页头</h3>
        <router-link to="/home">首页</router-link>
        <router-link to="/user">用户管理</router-link>
        <router-link to="/liu">留言板</router-link>
        <hr>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'App',
    el: '#app'
}
</script>

<style>

</style>
