import { combineReducers } from 'redux';

import { reducer as themeReducer } from '../styles/theme/slice';
import { reducer as userReducer } from '../app/pages/User/slice';
// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly

const rootReducer = combineReducers({
  theme: themeReducer,
  user: userReducer,
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
});

export default rootReducer;