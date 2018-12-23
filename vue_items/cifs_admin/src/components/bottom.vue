<template>
  <div class="bottom">
      <p>测试系统出品  ICP证: 京B1-20170001</p>
  </div>
</template>

<script>
export default {
   name:'Bottom',
   components:{},
   props:{},
   data(){
     return {
     }
   },
   watch:{},
   computed:{},
   methods:{},
   created(){},
   mounted(){}
}
</script>
<style lang="less" scoped>
.bottom{
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 16px;
    color: #c1c1c1;
    background: #17233d;
}
</style>