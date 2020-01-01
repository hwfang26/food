import state from "./state";

/*
包含多个基于state的getter计算属性的对象
 */
export default {
    //总数量
    totalCount() {
        return state.cartFoods.reduce((preTotal,food) => preTotal + food.count,0)
    },
    //总价格
    totalPrice() {
        return state.cartFoods.reduce((preTotal,food) => preTotal + food.count*food.price,0)
    },
    //点赞人数
    positiveSize (state) {
        return state.ratings.reduce((preTotal, rating) => preTotal + (rating.rateType===0?1:0) , 0)
      }
}
