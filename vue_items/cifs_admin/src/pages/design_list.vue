<template>
  <div class="design">
      <div class="searchBox">

        <Row>
           <Col span="4" style="padding-right:10px">
                <Select v-model="selectType" filterable @on-change='typesChange'>
                    <Option v-for="item in typeList" :value="item.id" :key="item.value">{{ item.name }}</Option>
                </Select>
            </Col>
             <Col span="4">
                <Select v-model="selectItem" filterable @on-change='itemsChange'>
                    <Option v-for="item in itemList" :value="item.id" :key="item.value">{{ item.name }}</Option>
                </Select>
            </Col>
            <Col span="8" class="handle"><Button class="searchBtn" type="primary" icon="ios-search" @click='searchDesign'>搜索</Button><Button type="primary" icon="ios-add" @click='addDesign'>添加</Button></Col>
        </Row>

      </div>
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

                typeList: [],
                itemList: [],
                selectType: '',
                selectItem: '',
           

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
                                        this.remove(id)
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
   watch:{
       selectType:function(val,old){
           this.itemList=[];
            this.typeList.forEach(item=>{
               if(val==item.id){
                    this.itemList=item.son;
               }
           })
       }
   },
   computed:{

   },
   methods:{
       typesChange(val){
           this.itemList=[];
            this.typeList.forEach(item=>{
               if(val==item.id){
                    this.itemList=item.son;
               }
           })
       },
       itemsChange(val){
          // console.log(val)
       },
        addDesign(){
            this.$router.push({path:'/design_handle'})
            console.log('kk')
        },
       searchDesign(){
           if(this.selectType==''){return}
           if(this.selectItem==''){
                 this.getDesignList(this.selectType)
           }else{
                this.getDesignList(this.selectType,this.selectItem)
           }
           console.log(this.selectType);
           console.log(this.selectItem);
       },
        show(index){
           this.$Modal.info({
               title:'User info',
               content:`name: ${this.data5[index].name}<br>age:${this.data5[index].age}<br>address:${this.designList[index].address}`
            })
        },
        remove(id){
            var that=this;
            this.$Modal.confirm({
                title:'提示',
                maskClosable:false,
                content:'你确定要删除此项吗?',
                onOk:()=>{   
                    console.log(id);
                    that.$http.post('design_delete.php',{id:id}).then(res=>{
                        console.log(res);
                        that.designList=res;
                    });
                },
                onCancel:()=>{
                   // this.$Modal.remove();
                }
            })
        },
        pageChange(data){
         // console.log(data)
        },
        pageSizeChange(num){
           // console.log(num)
        },
        getDesignList(typeId,itemId){
            console.log(typeId)
            var that=this;
            var obj={};
            if(typeId==undefined&& itemId==undefined){
                obj={};
            }else{
                if(typeId!==undefined&& itemId==undefined){
                     obj={types:typeId};
                }else{
                     obj={types:typeId,items:itemId};
                }
            }
            this.$http.get('design_list.php',obj).then(res=>{
                that.designList=res;
            });
        }

   },
   created(){},
   mounted(){
        var that=this;
        this.$http.get('design_type.php',{}).then(res=>{
           that.typeList=res;
       })
        this.getDesignList();
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
    .searchBox{
        height: 50px;
        line-height: 50px;
    }
    .handle{
        padding: 0 10px;
        white-space: nowrap;
    }
    .handle .searchBtn{
        margin-right: 10px;;
    }
</style>