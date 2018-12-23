<template>
  <div class="user_list">
      <Table width="800" height="400" border :columns="columns2" :data="data4"></Table>
      <Table width="800" border :columns="columns3" :data="data5"></Table>
      <Page :total="totalPage" show-total show-sizer show-elevator @on-change="pageChange" @on-page-size-change="pageSizeChange" />

  </div>
</template>

<script>

export default {
   name:'userList', 
   components:{},
   props:{},
   data(){
     return {
        totalPage:40,
        columns2: [
            {
                title: 'Name',
                key: 'name',
                width: 100,
                fixed: 'left'
            },
            {
                title: 'Age',
                key: 'age',
                width: 100
            },
            {
                title: 'Province',
                key: 'province',
                width: 100
            },
            {
                title: 'City',
                key: 'city',
                width: 100
            },
            {
                title: 'Address',
                key: 'address',
                width: 200
            },
            {
                title: 'Postcode',
                key: 'zip',
                width: 100
            },
            {
                title: 'Action',
                key: 'action',
                // fixed: 'right',
                width: 120,
                render: (h, params) => {
                    return h('div', [
                        h('Button', {
                            props: {
                                type: 'text',
                                size: 'small'
                            }
                        }, 'View'),
                        h('Button', {
                            props: {
                                type: 'text',
                                size: 'small'
                            }
                        }, 'Edit')
                    ]);
                }
            }
        ],
        columns3: [
            {
                title: 'Name',
                key: 'name',
                render:(h,params)=>{
                    return h('div',[
                        h('Icon',{
                            props:{
                                type:'person'
                            }
                        }),
                        h('strong',params.row.name)
                    ])
                }
            },
            {
                title: 'Age',
                key: 'age'
            },
            {
                title: 'Address',
                key: 'address',
                width: 200
            },
            {
                title: 'Action',
                key: 'action',
                width: 150,
                render: (h, params) => {
                    return h('div', [
                        h('Button', {
                            props: {
                                type: 'primary',
                                size: 'small'
                            },
                            style:{
                                marginRight:'5px'
                            },
                            on:{
                                click:()=>{
                                    this.show(params.index)
                                }
                            }
                        }, '详情'),
                        h('Button', {
                            props: {
                                type: 'error',
                                size: 'small'
                            },
                            on:{
                                click:()=>{
                                    this.remove(params.index)
                                }
                            }
                        }, '删除')
                    ]);
                }
            }
        ],
        data4: [
            {
                name: 'John Brown',
                age: 18,
                address: 'New York No. 1 Lake Park',
                province: 'America',
                city: 'New York',
                zip: 100000
            },
            {
                name: 'Jim Green',
                age: 24,
                address: 'Washington, D.C. No. 1 Lake Park',
                province: 'America',
                city: 'Washington, D.C.',
                zip: 100000
            },
            {
                name: 'Joe Black',
                age: 30,
                address: 'Sydney No. 1 Lake Park',
                province: 'Australian',
                city: 'Sydney',
                zip: 100000
            },
            {
                name: 'Jon Snow',
                age: 26,
                address: 'Ottawa No. 2 Lake Park',
                province: 'Canada',
                city: 'Ottawa',
                zip: 100000
            },
            {
                name: 'John Brown',
                age: 18,
                address: 'New York No. 1 Lake Park',
                province: 'America',
                city: 'New York',
                zip: 100000
            },
            {
                name: 'Jim Green',
                age: 24,
                address: 'Washington, D.C. No. 1 Lake Park',
                province: 'America',
                city: 'Washington, D.C.',
                zip: 100000
            },
            {
                name: 'Joe Black',
                age: 30,
                address: 'Sydney No. 1 Lake Park',
                province: 'Australian',
                city: 'Sydney',
                zip: 100000
            },
            {
                name: 'Jon Snow',
                age: 26,
                address: 'Ottawa No. 2 Lake Park',
                province: 'Canada',
                city: 'Ottawa',
                zip: 100000
            }
        ],
        data5: [
            {
                name: 'John Brown',
                age: 18,
                address: 'New York No. 1 Lake Park'
            },
            {
                name: 'Jim Green',
                age: 24,
                address: 'Washington, D.C. No. 1 Lake Park'
            },
            {
                name: 'Joe Black',
                age: 30,
                address: 'Sydney No. 1 Lake Park'
            },
            {
                name: 'Jon Snow',
                age: 26,
                address: 'Ottawa No. 2 Lake Park'
            }
        ]

     }
   },
   watch:{},
   computed:{},
   methods:{
       show(index){
           this.$Modal.info({
               title:'User info',
               content:`name: ${this.data5[index].name}<br>age:${this.data5[index].age}<br>address:${this.data5[index].address}`
           })
       },
       remove(index){
           this.data5.splice(index,1)
       },
       pageChange(data){
          console.log(data)
       },
       pageSizeChange(num){
            console.log(num)
       }
   },
   created(){},
   mounted(){}
}
</script>
<style lang="less" scoped>
</style>