<template>
  <div class="design_handle">
        <h2 class="title">添加设计图</h2>
        <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="140">
            <FormItem label="设计图分类" prop="type">
                <Select v-model="formValidate.type" placeholder="选择设计图类型">
                    <Option value="1">风格</Option>
                    <Option value="2">空间</Option>
                    <Option value="3">局部</Option>
                    <Option value="4">色系</Option>
                </Select>
            </FormItem>

            <FormItem label="设计图分类子类" prop="typeList">
                <Select v-model="formValidate.typeList" placeholder="选择设计图分类子类">
                    <Option value="1">北欧</Option>
                    <Option value="2">中国风</Option>
                    <Option value="3">地中海</Option>
                </Select>
            </FormItem>

            </FormItem>
            <FormItem label="子类封面图" prop="typeListImg">
                +++
            </FormItem>
            <FormItem label="设计图" prop="desginImg">
                +++
            </FormItem>
            <FormItem label="设计图描述" prop="desc">
                <Input v-model="formValidate.desc" placeholder="请填写设计图描述"></Input>
            </FormItem>
            <FormItem>
                <Button type="primary" @click="handleSubmit('formValidate')">Submit</Button>
                <Button @click="handleReset('formValidate')" style="margin-left: 8px">Reset</Button>
            </FormItem>
        </Form>
   </div>
</template>

<script>
export default {
   name:'designHandle', 
   components:{},
   props:{},
   data(){
     return {
        formValidate: {
            type: '',
            typeList: '',
            typeListImg: '',
            desginImg: [],
            desc: ''
        },
        ruleValidate: {
            type: [
                { required: true, message: '请选择设计图类型', trigger: 'change' }
            ],
           typeList: [
                { required: true, message: '请选择设计图类型子类', trigger: 'change' }
            ],
            typeListImg: [
                { required: true, message: '请上传设计图类型子类封面图', trigger: 'blur' }
            ],
            desginImg: [
                { required: true, message: '请上设传计图', trigger: 'blur' }
            ],
            desc: [
                { required: true, message: '请填写设计图描述', trigger: 'blur' },
                { type: 'string', min: 10, message: '描述至少10个字', trigger: 'blur' }
            ]
        }
     }
   },
   watch:{},
   computed:{},
   methods:{
             handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('Success!');
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            },
            handleReset (name) {
                this.$refs[name].resetFields();
            }
   },
   created(){},
   mounted(){
    //    var that=this;
    //    var id=this.$route.query.id;
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
.design_handle{
    width:60%;
    .title{
        margin-bottom: 20px;
    }
}
</style>