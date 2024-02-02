import {Type} from './action.type'

export const initialState = {
  basket: []
}

export const reducer = (state, action) => {
    switch (action.Type) {
      case Type.ADD_TO_BASKET:
        return{
          ...state, 
          basket: [...state.basket, action.item]
        }
    
      default:
        return state;
    }
}

