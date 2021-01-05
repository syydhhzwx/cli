<template>
<div>
    <input type="text" v-model="name">
    <input type="text" v-model="age">
    <input type="text" v-model="bir">
    <button @click="add">添加</button>
    <hr>

</div>
</template>

<script>
export default {
name: "Add",
    data(){
    return{
        id:this.$route.query.id,
        name:'',
        age:'',
        bir:'',
    }
    },
    methods:{
        add(){
            this.$router.push({path:'/add?id=' + this.id + '&name=' + this.name + '&age=' +this.age + '&bir=' +this.bir})
        }
    }
}
</script>

<style scoped>

</style>
