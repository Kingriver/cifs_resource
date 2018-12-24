<template>
  <div class="login">
      <div class="content">
            <h2 class="title">测试系统....</h2>
            <Form ref="formInfo" :model="formInfo" :rules="rulesInfo">
                <FormItem prop="user">
                    <Input type="text" size="large" v-model="formInfo.user" placeholder="用户名" clearable>
                        <Icon type="ios-person-outline" slot="prepend"></Icon>
                    </Input>
                </FormItem>
                <FormItem prop="password">
                    <Input type="password" size="large" v-model="formInfo.password" placeholder="密码" clearable>
                        <Icon type="ios-lock-outline" slot="prepend"></Icon>
                    </Input>
                </FormItem>
                <FormItem>
                    <Button type="primary" style="width:100%" size="large" @click="handleSubmit('formInfo')" :disabled="subState">登陆</Button>
                </FormItem>
            </Form>
      </div>
  </div>
</template>

<script>
import Cookies from 'js-cookie'
export default { 
   name:'Login',
   components:{},
   props:{},
   data(){
     return {
         formInfo:{
             user:'',
             password:''
         },
         rulesInfo:{
             user:[
                 {required:true,message:'用户名不能为空',trigger:'blur'}
             ],
             password:[
                 {required:true,message:'密码不能为空',trigger:'blur'}
             ]
         }
     }
   },
   watch:{
      
   },
   computed:{
       subState(){
            if(!this.formInfo.user || !this.formInfo.password){
                return true
            }else{
                return false
            }
       }
   },
   methods:{
       handleSubmit(name){
           var that=this;
           this.$http.post('user_login.php',{
                name:this.formInfo.user,
                password:this.formInfo.password
               }
            ).then(function(res){
                if(res.success){
                    Cookies.set('userInfo',res);
                    that.$router.push({path:'/home'});
                    that.$Message.success('登陆成功');
                    that.formInfo.user='';
                    that.formInfo.password='';
                }else{
                    that.$Message.success('登录失败,请重试')
                }
            })
        //    this.$refs[name].validate((valid)=>{
        //        if(valid){
        //          //  this.$router.push('home')
        //            Cookies.set('userInfo',this.formInfo.user);
        //            this.$router.push({path:'/home'});
        //            this.$Message.success('登陆成功');
        //            this.formInfo.user='';
        //            this.formInfo.password='';
        //        }else{
        //            this.$Message.success('登录失败')
        //        }
        //    })

       }
   },
   created(){},
   mounted(){
       console.log(Cookies)
   }
}
</script>
<style lang="less" scoped>
.login{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    background: url(http://www.jiouai.com/static/img/bg9.639dc7b.jpg) no-repeat;
    background-size: 100% 100%;
    .content{
        width: 300px;
        padding: 20px;
        border-radius: 8px; 
        background: #ffffff;
        .title{
            text-align: center;
            margin-bottom: 24px;
        }
    }
}
</style>