<template>
<div>
        {{$route.query.index}}
        <table width="300">
            <tr v-for="(value,key,index) in all_list[parseInt(index)]" :key="index">
            <td>{{ key }}</td>
            <td>{{ value }}</td>
            </tr>
        </table>

</div>
</template>

<script>
export default {
name: "Xinxi",
    data(){
    return{
        all_list:[
            {id:1,name:'花花',age:18,bir:'2010-01-15',em:'773624508',arrd:'北京'},
            {id:2,name:'青青',age:18,bir:'2010-01-15',em:'773624508',arrd:'北京'},
            {id:3,name:'草草',age:18,bir:'2010-01-15',em:'773624508',arrd:'北京'},
            {id:4,name:'木木',age:18,bir:'2010-01-15',em:'773624508',arrd:'北京'},
        ],
        index:this.$route.query.index,
    }
    },
    mounted() {
        console.log(this.index,typeof this.index);
        console.log(this.all_list[parseInt(this.index)]);
    }
}
</script>

<style scoped>

</style>
