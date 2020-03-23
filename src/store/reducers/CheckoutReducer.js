import { SET_VALUE, SET_CLIENT } from '../actions/types/CheckoutTypes';

const initialState = {
  value: 0,
  client: {}
};

function CheckoutReducer(state = initialState, action) {
  switch (action.type) {
    case SET_VALUE:
      return {
        ...state,
        value: action.payload
      };
    case SET_CLIENT:
      return {
        ...state,
        client: action.payload
      };
    default:
      return state;
  }
}

export default CheckoutReducer;
