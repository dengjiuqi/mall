<!--封装首页导航栏【流行/新款/精选】-->
<template>
  <div class="tabcontrol">
    <div v-for="(item, index) in titles" 
    :key="index" 
    class="tabcontrol-item" 
    :class="{active: index === currentIndex}"
    @click = "tabClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name:'TabControl',
  props:{
    titles:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data() {
    return {
      currentIndex:0//默认为第一个导航标签
    }
  },
  methods: {//点击时更新活跃标签，并发送点击事件，让首页更新type
    tabClick(index){
      this.currentIndex = index;
      this.$emit('tabclick',index)

    }
  },

}
</script>

<style  scoped>
  .tabcontrol{
    display: flex;
    text-align: center;
    font-size: 16px;
    height: 40px;
    line-height: 40px;

  }
  .tabcontrol-item{
    flex: 1;
    
  }
  .tabcontrol-item span{
    padding: 5px;
  }
  .active{
    color: var(--color-high-text);
  }
  .active span{
    border-bottom: 3px solid var(--color-tint);
  }

</style>
