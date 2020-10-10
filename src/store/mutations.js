import{
  ADD_COUNT,
  ADD_CART
} from './mutations_type'

export default {
    addcount(state, payload){
      payload.count++
    },
    [ADD_CART](state, payload){
      payload.checked = true
      state.cartList.push(payload)
    }
}