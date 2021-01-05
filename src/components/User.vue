<template>
<div>
    <h3>这是第二个组件</h3>
    <table border="1" cellspacing="0" width="600">
        <tr align="center">
            <th>ID</th>
            <th>姓名</th>
            <th>年龄</th>
            <th>生日</th>
            <th>操作</th>
        </tr>
        <tr v-for="(user,i) in user_list" :key="user.id" align="center">
            <td>{{user.id}}</td>
            <td>{{user.name}}</td>
            <td>{{user.age}}</td>
            <td>{{user.bir}}</td>
            <td><a href="javascript:" @click="del_arr(i)">删除</a>|
                <a href="javascript:" @click="cheak_all(i)">详细信息</a>|
                <a href="javascript:" @click="add_arr(user.id)">添加</a></td>
        </tr>
    </table>
</div>
</template>

<script>
export default {
    name: "User",
    data(){
        return {
            user_list:localStorage.arr?JSON.parse(localStorage.arr):[],
            id:this.$route.query.id,
            name:this.$route.query.name,
            age:this.$route.query.age,
            bir:this.$route.query.bir,
        }
    },
    created() {
        let arr = [
            {id:1,name:'花花',age:18,bir:'2010-01-15'},
            {id:2,name:'青青',age:18,bir:'2010-01-15'},
            {id:3,name:'草草',age:18,bir:'2010-01-15'},
            {id:4,name:'木木',age:18,bir:'2010-01-15'},
        ]
        global(arr)
        localStorage.arr = JSON.stringify(arr)
    },
    methods:{
        del_arr(i) {
            console.log(i)
            let list = JSON.parse(localStorage.arr)
            console.log(list)
            list.splice(i,1)
            localStorage.arr = JSON.stringify(list)
        },
        cheak_all(i){
            // alert(i)
            this.$router.push({path:'/xinxi?index= '+ i } )
            console.log(this.$route.path);
        },
        add_arr(id){
            this.$router.push({path:'/add?id=' + id})
        },
        mounted() {
            console.log(arr);
        }
    }

}
</script>

<style scoped>

</style>
