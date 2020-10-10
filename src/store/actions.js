import{
  ADD_COUNT,
  ADD_CART
} from './mutations_type'

export default{
  addCart(context, payload){
    return new Promise( (resolve, reject) => {
      // find函数 查找之前是否有该商品，如果有则将商品count+=1,没有就将商品push进购物车列表并将count设置为1
      let oldcart = context.state.cartList.find(item=>item.iid===payload.iid)
      if(oldcart){
          // oldcart.count+=1
          context.commit("addcount",oldcart)
          resolve('数量加一')//在toast.show(res)中显示提示信息
      }else{
          payload.count = 1
          // state.cartList.push(playload)
          context.commit(ADD_CART,payload)
          resolve('添加新的商品')
      }
    })
  }
}