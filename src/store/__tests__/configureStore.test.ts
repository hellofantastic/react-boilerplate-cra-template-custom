import { configureAppStore } from '../configureStore';

describe('configureStore', () => {
  it('should return a store with a reducer', () => {
    const store = configureAppStore();
    console.log('test store', store);
    expect(store).toEqual(
      expect.objectContaining({
        reducer: expect.any(Object),

        dispatch: expect.any(Function),
        getState: expect.any(Function),
        replaceReducer: expect.any(Function),
        subscribe: expect.any(Function),
      }),
    );
  });
});
