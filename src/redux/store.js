import { configureStore } from '@reduxjs/toolkit';

import { listenerMiddleware } from './listeners';
import { furnitureReducer } from './furnitureSlice';


const store = configureStore({ 
  reducer: {
    furniture: furnitureReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(listenerMiddleware.middleware),
});


export { store };