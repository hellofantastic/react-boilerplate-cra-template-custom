import { configureAppStore } from '../configureStore';

describe('configureStore', () => {
  it('should return a store with injected enhancers', () => {
    const store = configureAppStore();
    expect(store).toEqual(
      expect.objectContaining({
        runSaga: expect.any(Function),
      }),
    );
  });

  it('should return an empty store', () => {
    const store = configureAppStore();
    expect(store.getState()).toBeUndefined();
  });
});
