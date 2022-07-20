import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { RootState } from 'types';
import rootReducer from './rootReducer';
import rootSaga from './rootSagas';
export function configureAppStore() {
  const reduxSagaMonitorOptions = {};
  const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);

  //MIDDLEWARE
  const localStorageMiddleware = ({ getState }) => {
    return next => action => {
      const result = next(action);

      localStorage.setItem(
        'state',
        JSON.stringify({
          user: getState().user,
        }),
      );
      return result;
    };
  };

  const reHydrateStore = () => {
    if (localStorage.getItem('state') !== null) {
      return JSON.parse(localStorage.getItem('state') || '{}'); // re-hydrate the store
    }
  };

  const preloadedState: Partial<RootState> = reHydrateStore();

  const middlewares = [sagaMiddleware, localStorageMiddleware];

  const store = configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: false,
      }).concat(middlewares),
    devTools:
      /* istanbul ignore next line */
      process.env.NODE_ENV !== 'production' ||
      process.env.PUBLIC_URL.length > 0,
  });
  sagaMiddleware.run(rootSaga);
  return store;
}
