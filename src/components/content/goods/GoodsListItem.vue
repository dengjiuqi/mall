<template>
  <div class="goods-item" @click="itemClick">
      <img v-lazy = "showImage" alt="" @load="imageLoad">
      <div class="goods-info">
        <p>{{goodsitem.title}}</p>
        <span class="price">{{goodsitem.price}}</span>
        <span class="collect">{{goodsitem.cfav}}</span>
      </div>
  </div>
</template>

<script>
export default {
  name:'GoodsListItem',
  props:{
    goodsitem:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  computed: {//获取商品图片路径
    showImage(){
      return this.goodsitem.image || this.goodsitem.show.img
    }
  },
  methods: {
    imageLoad(){//图片懒加载会更新scroll的高度，因此通过事件总线来发送事件，通知scrll更新高度
      this.$bus.$emit('itemImageLoad')
    },
    itemClick(){//点击跳转到商品详情页
      this.$router.push('./details/'+ this.goodsitem.iid)
    }
  },
}
</script>

<style  scoped>
  .goods-item {
    padding-bottom: 40px;
    position: relative;

    width: 48%;
  }

  .goods-item img {
    width: 100%;
    border-radius: 5px;
    /* border:3px solid var(--color-tint); */
  }

  .goods-info {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }

  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }

  .goods-info .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }

  .goods-info .collect {
    position: relative;
  }

  .goods-info .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }

</style>>
  
