<template>
  <div class="main">
        <Layout>
            <Top />
        </Layout>    
        <Layout class="middle">
            <Left :isCollapsed="isCollapsed" />
            <Content :style="{marginLeft: contentLeft}" class="content">
                <Row>
                    <Col span="24">
                        <p class="content-title">
                            <Icon @click.native="collapsedSider" :class="rotateIcon" :style="{margin: '0 20px'}" type="md-menu" size="24"></Icon>
                            <Breadcrumb class="breadcrumb">
                                <BreadcrumbItem to="/">
                                    <Icon type="ios-home-outline"></Icon> 首页
                                </BreadcrumbItem>
                                <BreadcrumbItem to="/components/breadcrumb">
                                    <Icon type="logo-buffer"></Icon> {{pageNow}}
                                </BreadcrumbItem>
                            </Breadcrumb>
                        </p>
                        <div class="right-content">
                            <router-view />
                        </div> 
                        <Bottom />
                    </col>
                </Row>

            </content>
        </Layout>
  </div>

</template>

<script>
import Top from './top.vue'
import Left from './left.vue'
import Bottom from './bottom.vue'
import Cookies from 'js-cookie'
export default {
   name:'Main', 
   components:{
       Top,
       Left,
       Bottom
   },
   props:{},
   data(){
     return {
        pageNow:'',
        isCollapsed: false,
        contentLeft:'200px'
     }
   },
   watch:{
       $route(from,to){
           console.log(to)
           this.pageNow=to.meta.title
       }
   },
   computed:{
        rotateIcon () {
            return [
                'menu-icon',
                this.isCollapsed ? 'rotate-icon' : ''
            ];
        },

   },
   methods:{
        collapsedSider () {
            if(this.isCollapsed){
                this.contentLeft='200px'
                this.isCollapsed=false
            }else{
                this.contentLeft='78px'
                this.isCollapsed=true
            }
        }
   },
   created(){},
   mounted(){
       
   }
}
</script>
<style lang="less" scoped>
    .main{
        // border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        // border-radius: 4px;
        overflow: hidden;
    }
    .content{
        padding-bottom: 40px;
    }
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }

    .menu-icon{
        transition: all .3s;
    }
    .rotate-icon{
        transform: rotate(-90deg);
    }

    .right-content{
        padding: 10px 0 0 20px;
    }
    .middle{
        margin-top: 64px;
        // display: -webkit-box;
    }
    .content-title{
        padding: 10px 0;
        .breadcrumb{
            display: inline;
        }
    }
</style>