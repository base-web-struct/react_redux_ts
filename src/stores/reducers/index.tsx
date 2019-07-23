import { ModifyAction } from '../actions'
import { DECREMENT, INCREMENT } from '../constants'
import { StoreState } from '../type'

// 处理并返回 state 
export default (state: StoreState = 0, action: ModifyAction): StoreState => {
  switch (action.type) {
    case INCREMENT:
      return state + 1
    case DECREMENT:
      return state - 1
    default:
      return state
  }
}