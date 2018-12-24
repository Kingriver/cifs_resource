<template>
  <div class="design-detail">
            <div>设计图类型：风格</div>
            <div>风格类型：风格</div>
      <div>描述：{{itemData.design_desc}}</div>
            <div>浏览数量：{{itemData.design_browse}}</div>
                  <div>分享数量：{{itemData.design_share}}</div>
                        <div>类型：{{itemData.design_type}}</div>
                        <div class="designImg"><img v-for="img in itemData.design_imgs" :src="img" alt=""></div>
                        
  </div>
</template>

<script>
export default {
   name:'designdetail', 
   components:{},
   props:{},
   data(){
     return {
         itemData:{}
     }
   },
   watch:{},
   computed:{},
   methods:{},
   created(){},
   mounted(){
       var that=this;
       var id=this.$route.query.id;
    //    this.$http.get('design_detail.php',{id:id}).then(res=>{
    //          that.itemData=res;
    //    })
   }
}
</script>
<style lang="less" scoped>
.designImg{
    display: flex;
    flex-wrap: wrap;
    img{
        width: 100px;
        height: 100px;
        margin:10px;
    }
}
</style>