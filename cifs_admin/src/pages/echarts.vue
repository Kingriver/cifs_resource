<template>
  <div class="echarts">
        <order-type id="bin1_data" type="ordertype"></order-type>
        <order-type id="bin3_data" type="areatype"></order-type>
  </div>
</template>

<script>
import echarts from 'echarts'
import orderType from '../components/echarts/orderType'
export default {
   name:'Echarts', 
   components:{
       orderType
   },
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
</style>