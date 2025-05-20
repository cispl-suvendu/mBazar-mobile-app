import categoryReducer from '@/store/slices/categorySlice';
import linkReducer from '@/store/slices/linkSlice';
import productReducer from '@/store/slices/productSlice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    products: productReducer,
    category: categoryReducer,
    linkList: linkReducer
  },
  middleware: (defaultMiddleware) =>
    defaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;