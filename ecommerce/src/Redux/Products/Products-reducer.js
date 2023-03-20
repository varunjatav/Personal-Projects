import { SELECTED_PRODUCTS, SET_PRODUCTS } from "./Products-actionType"

const initialState ={
    products: [],
}

export const productReducer = ( state = initialState , action) =>{
   switch(action.type){
    case SET_PRODUCTS: 
        return {...state, products: action.payload};
    default : 
        return state;
   }
}

export const selectedProductReducer = (state = {}, action) =>{
    switch(action.type){
        case SELECTED_PRODUCTS:
            return {...state, ...action.payload}
         default:
            return state;   
    }
}