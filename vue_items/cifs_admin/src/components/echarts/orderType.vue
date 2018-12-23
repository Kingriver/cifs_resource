<template>
  <div class="" :id="id" style="width:100%;height:280px;"></div>
</template>

<script>
import echarts from 'echarts'
export default {
   components:{},
   props:{
    id:{
        
    },
    type:{
        type:String
    }
   },
   data(){
     return {
         myChart:null,
     }
   },
   watch:{
       type:(v)=>{
           this.readyBin10Option(v)
       }
   },
   computed:{},
   methods:{
       readyBin10Option(type){
           let text,legend_data,series_data;
           if(type=="ordertype"){
                text="用户投资类型"
               	legend_data = ['基金','股票','债券','储蓄','期货'];
				series_data = [
                    {value:335, name:'基金'},
                    {value:310, name:'股票'},
                    {value:234, name:'债券'},
                    {value:135, name:'储蓄'},
                    {value:1548, name:'期货'}
				]
           }else{
                text = "用户投资区域";
                legend_data = ['华东区','华南区','华中区','华北区','西南区','东北区','台港澳'];
                series_data = [
                    {value:335, name:'华东区'},
                    {value:310, name:'华南区'},
                    {value:234, name:'华中区'},
                    {value:835, name:'华北区'},
                    {value:1548, name:'西南区'},
                    {value:335, name:'东北区'},
                    {value:454, name:'台港澳'}
                ]
           }
           let data={
               title:{
                   text:text,
                   subtext:'纯属虚构',
                   x:'center'
               },
               tooltip:{
                   trigger:'item',
                   formatter:'{a} <br/>{b} : {c} ({d}%)'
               },
               legend:{
                   orient:'vertical',
                   left:'left',
                   data:legend_data
               },
               series:[
                   {
                       name:'访问来源',
                       type:'pie',
                       radius:'50%',
                       center:['50%','60%'],
                       data:series_data,
                       itemStyle:{
                           emphasis:{
                               shadowBlur:10,
                               shadowOffsetX:0,
                               shadowColor:'rgba(0,0,0,0.5)'
                           }
                       }
                   }
               ]
           }
           return data
       }
   },
   created(){},
   mounted(){
       this.myChart=echarts.init(document.getElementById(this.id))
       this.myChart.setOption(this.readyBin10Option(this.type))
   }
}
</script>
<style lang="less" scoped>
</style>