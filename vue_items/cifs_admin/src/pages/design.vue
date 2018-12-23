<template>
  <div class="design">
    <Table width="850" height="400" border :columns="designCol" :data="designList"></Table>
    <Page :total="totalPage" show-total show-sizer show-elevator @on-change="pageChange" @on-page-size-change="pageSizeChange" />
  </div>
</template>

<script>
export default {
   name:'Design', 
   components:{},
   props:{},
   data(){
     return {
        totalPage:40,
        designCol: [
                {
                    title: '序号',
                    key: 'design_id',
                    width: 100,
                    fixed: 'left'
                },
                {
                    title: '类型',
                    key: 'design_type',
                    width: 100
                },
                {
                    title: '描述',
                    key: 'design_desc',
                    width: 200
                },
                {
                    title: '浏览数量',
                    key: 'design_browse',
                    width: 100
                },
                {
                    title: '分享数量',
                    key: 'design_share',
                    width: 100
                },
                {
                    title: '设计图',
                    key: 'design_imgs',
                    width: 100,
                    render:(h,params)=>{
                        return h('img',{
                            props:{
                     
                            },
                            attrs:{
                                src: params.row.design_imgs[0]
                            },
                            style:{
                                width:'60px',
                                height:'60px',
                                display:'block',
                                margin:'4px 0'
                            }
                            
                        })
                    }
                },
                {
                    title: '操作',       
                    key: 'handle',
                    // fixed: 'right',
                    width: 150,
                    render: (h, params) => {
                        return h('div', [
                            h('Button', {
                                props: {
                                    type: 'primary',
                                    size: 'small'
                                },
                                on:{
                                    click:()=>{
                                        var id=params.row.design_id;
                                        this.$router.push({path:'/design_detail',query:{id:id}});
                                    }
                                }
                            }, '详情'),
                            h('Button', {
                                props: {
                                    type: 'error',
                                    size: 'small'
                                },
                                style:{
                                    marginLeft:'8px'
                                },
                                on:{
                                    click:()=>{
                                        var id=params.row.design_id;
                                        this.remove(params.index)
                                    }
                                }
                            }, '删除')
                        ]);
                    }
                }
        ],
        designList: [
        ],
        modal:false
     }
   },
   watch:{},
   computed:{},
   methods:{
        show(index){
           this.$Modal.info({
               title:'User info',
               content:`name: ${this.data5[index].name}<br>age:${this.data5[index].age}<br>address:${this.designList[index].address}`
            })
        },
        remove(index){
            this.$Modal.confirm({
                title:'提示',
                maskClosable:false,
                content:'你确定要删除此项吗?',
                onOk:()=>{
                    this.designList.splice(index,1)
                },
                onCancel:()=>{
                   // this.$Modal.remove();
                }
            })
        },
        pageChange(data){
          console.log(data)
        },
        pageSizeChange(num){
            console.log(num)
        }
   },
   created(){},
   mounted(){
       var that=this;
       this.$http.get('/xcx/design_list.php',{}).then(res=>{
           that.designList=res;
       })
   }
}
</script>
<style lang="less" scoped>
    .ivu-modal{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%)
    }
</style>