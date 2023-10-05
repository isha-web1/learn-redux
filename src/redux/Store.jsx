// create store for redux

import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counter/CounterSlice'
// import logger from 'redux-logger';
import logger from './middlewares/logger';
const store = configureStore({
    reducer: {
        counter : counterReducer
    },
    middleware : (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
  })

  export default store;