import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counter-slice';
import articleIndexReducer from '../features/article-index/article-index-slice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    articleIndex: articleIndexReducer,
  },
});
