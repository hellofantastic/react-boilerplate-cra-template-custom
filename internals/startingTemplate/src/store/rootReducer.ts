import { combineReducers } from 'redux';

// User
import { reducer as themeReducer } from '../styles/theme/slice';
import { reducer as userReducer } from '../app/pages/User/slice';

const rootReducer = combineReducers({
  theme: themeReducer,
  user: userReducer,
});

export default rootReducer;