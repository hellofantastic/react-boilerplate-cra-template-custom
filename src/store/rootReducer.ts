import { combineReducers } from 'redux';

import { reducer as themeReducer } from '../styles/theme/slice';
import { reducer as userReducer } from '../app/pages/User/slice';
// [IMPORT NEW REDUCER ABOVE] < Needed for generating reducers seamlessly

const rootReducer = combineReducers({
  theme: themeReducer,
  user: userReducer,
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating reducers seamlessly
});

export default rootReducer;
