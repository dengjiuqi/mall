import {debounce} from './utils'
//将图片加载监听器设置为混入
export const itemListenerMixin = {
  data() {
    return {
      itemImgListener:null
    }
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh,500)
    //监听item图片加载完成，通过事件总线
    //通过事件总线，可以发送事件，
    // 对监听事件进行保存
    this.itemImgListener = () => {
      refresh()
    }
    this.$bus.$on('itemImageLoad',this.itemImgListener )
  },
}