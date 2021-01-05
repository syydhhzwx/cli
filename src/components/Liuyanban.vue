<template>
<div>
    <input type="text" value="" v-model="msg">
    <button @click="get_liu">发表留言</button>
    <ul>
        <li v-for="(v,i) in msg_list" :key="i">{{v}}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="javascript:" @click="del_list(i)">删除</a>
        </li>
    <span v-if="msg_list.length>0">留言总数:{{msg_list.length}}</span>
        <span v-if="msg_list.length>0"><a href="javascript:" @click="del_all">删除所有</a></span>
    </ul>

</div>
</template>

<script>
export default {
    name: "Liuyanban",
    data(){
        return{
            msg:'',
            msg_list:localStorage.list?JSON.parse(localStorage.list):[],
        }
    },
    methods:{
        get_liu(){
            let msg = this.msg
            if (msg) {
                this.msg_list.push(this.msg)
                localStorage.list = JSON.stringify(this.msg_list)
                this.msg = ''
            }
        },
        del_list(i){
            let arr = JSON.parse(localStorage.list)
            console.log(arr,i);
            // JSON.parse(localStorage.removeItem('list'[i]))
            arr.splice(i-1,1)
            localStorage.list=JSON.stringify(arr)
        },
        del_all(){
            this.msg_list=[]
        }
    }
}
</script>

<style scoped>

</style>
