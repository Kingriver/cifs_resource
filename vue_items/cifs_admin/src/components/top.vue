<template>
  <div class="top">
        <Header :style="{position: 'fixed', width: '100%'}" class="layout-header-bar">
            <Row>
                <Col span="12">
                    <router-link class="logo" to="/404">
                    <!-- <img  src="../images/logo.png" alt="" /> -->
                    </router-link> 
                </Col>
                <Col span="12" class="header-right">
                    <img  class="avatar" :src="avatar" alt="" />
                    <a href="javascript:void(0)" class="userName">{{name}},您好 </a>
                    <Button size="small" @click="logOut">退出</Button> 
                </Col>
            </Row>
            
        </Header>
  </div>
</template>

<script>
import Cookies from 'js-cookie'
export default {
   name:'Top', 
   components:{},
   props:{},
   data(){
     return {
        isCollapsed: false,
        name:'',
        avatar:'../images/avatar.png',
        theme:"#2d8cf0"
     }
   },
   watch:{},
   computed:{

   },
   methods:{
       logOut(){
           Cookies.remove('userInfo')
           this.$router.push('login')
       }
   },
   created(){},
   mounted(){
       var userInfo=JSON.parse(Cookies.get('userInfo'));
       this.name=userInfo.user_name;
       this.avatar=userInfo.user_avatar;
   }
}
</script>
<style lang="less" scoped>
    .top{
        z-index: 999999;
    }
    .layout-header-bar{
        padding: 0 20px;
        background: #515a6e;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }
    .header-right{
        vertical-align: middle;
        a{
           color: #fff;
        }
        .avatar{
            display: inline-block;
            width: 40px;
            height: 40px;
            border-radius: 40px;
            vertical-align: middle;
        }
        text-align: right;
        .set{
            text-align: center;
        }
        .userName{
            padding: 0 14px;
        }
    }
    .logo{
        display: block;
        height: 64px;

        img{
            width:138px;
            height: 34px;
            margin-top: 15px;
        }
    }

</style>