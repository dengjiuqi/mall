
<template>
   <div class="tabbar-items" @click="itemsclick">
     <div v-if="!isActive"><slot name="items-icons"></slot></div>
     <div v-else> <slot name="items-icons-active"></slot></div>
     <div :class="{active:isActive}"> <slot name="items-text"></slot></div>
     </div>
</template>
<script>
export default {
  name: 'tabbaritems',
 computed: {
   isActive(){//判断当前子组件路径是否活跃，跳转活跃图片
     return this.$route.path.indexOf(this.path) !==-1
   }
 },
 props :{//传入url
   path :String
 },
  methods: {//点击跳转路由
    itemsclick(){
      this.$router.push(this.path)
    }
  },
}
</script>

<style scoped>
 .tabbar-items{
   flex: 1;
   text-align: center;
   height: 49px;
   font-size: 14px;
   padding-top: 5px;
 }
 .tabbar-items img{
     width: 24px;
     height: 24px;
     
     margin-bottom: 4px 0 2px 0;
    vertical-align: middle;
 }
 .active{
     color: red;
 }
</style>