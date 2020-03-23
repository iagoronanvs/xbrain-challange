import { combineReducers } from 'redux';

import { reducer as formReducer } from 'redux-form';

import ProductReducer from './ProductReducer';

import CheckoutReducer from './CheckoutReducer';

export default combineReducers({
  ProductReducer,
  CheckoutReducer,
  form: formReducer
});
