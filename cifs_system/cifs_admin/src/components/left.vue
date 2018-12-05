<template>
        <!-- <Sider ref="side1" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed">
            <Menu active-name="1-2" theme="dark" width="auto" :class="menuitemClasses">
                <MenuItem name="1-1">
                    <Icon type="ios-navigate"></Icon>
                    <span>Option 1</span>
                </MenuItem>
                <MenuItem name="1-2">
                    <Icon type="ios-search"></Icon>
                    <span>Option 2</span>
                </MenuItem>
                <MenuItem name="1-3">
                    <Icon type="ios-settings"></Icon>
                    <span>Option 3</span>
                </MenuItem>
            </Menu>
        </Sider> -->
        <Sider ref="side1" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed" :style="{position: 'fixed', height: '100vh', left: 0, overflow: 'auto'}">
            <Menu active-name="1-2" theme="dark" width="auto" :open-names="['1']" :class="menuitemClasses">
                <Submenu name="1">
                    <template slot="title">
                        <Icon type="ios-navigate"></Icon>
                        文章
                    </template>
                    <MenuItem name="1-1">文章 1</MenuItem>
                    <MenuItem name="1-2">文章 2</MenuItem>
                    <MenuItem name="1-3">文章 3</MenuItem>
                </Submenu>
                <Submenu name="2">
                    <template slot="title">
                        <Icon type="ios-keypad"></Icon>
                        作品
                    </template>
                    <MenuItem name="2-1">作品 1</MenuItem>
                    <MenuItem name="2-2">作品 2</MenuItem>
                </Submenu>
                <router-link to="/user_list"><MenuItem name="3-1"><Icon type="ios-people"></Icon> 用户列表</MenuItem></router-link>
                <router-link to="/echarts"><MenuItem name="4-1"><Icon type="ios-people"></Icon> 图表组件</MenuItem></router-link>

            </Menu>
        </Sider>
</template>

<script>
export default {
   name:'Left',
   components:{},
   props:{
       isCollapsed:{
           type:Boolean
       }
   },
   data(){
     return {
     }
   },
   watch:{},
   computed:{
        menuitemClasses () {
            return [
                'menu-item',
                this.isCollapsed ? 'collapsed-menu' : ''
            ]
        }
   },
   methods:{

   },
   created(){},
   mounted(){}
}
</script>
<style lang="less" scoped>
    .menu-item span{
        display: inline-block;
        overflow: hidden;
        width: 69px;
        text-overflow: ellipsis;
        white-space: nowrap;
        vertical-align: bottom;
        transition: width .2s ease .2s;
    }
    .menu-item span{
        display: inline-block;
        overflow: hidden;
        width: 69px;
        text-overflow: ellipsis;
        white-space: nowrap;
        vertical-align: bottom;
        transition: width .2s ease .2s;
    }
    .menu-item i{
        transform: translateX(0px);
        transition: font-size .2s ease, transform .2s ease;
        vertical-align: middle;
        font-size: 16px;
    }
    .collapsed-menu span{
        width: 0px;
        transition: width .2s ease;
    }
    .collapsed-menu i{
        transform: translateX(5px);
        transition: font-size .2s ease .2s, transform .2s ease .2s;
        vertical-align: middle;
        font-size: 22px;
    }


</style>