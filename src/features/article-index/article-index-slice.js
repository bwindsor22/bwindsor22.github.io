import { createSlice } from '@reduxjs/toolkit';
import articles from '../server/article-list';


const allTags = () => {
  return [...new Set(Object.values(articles).flatMap(a => a.tags))];
}

const colorMap = () => {
  const tags = allTags();
  const colorList = ['#a28089', '#1d2d50', '#133b5c', '#1e5f74', '#8458B3'];
  return tags.reduce((acc, tag, index) => {
    acc[tag] = colorList[index];
    return acc;
  }, {})
};

export const articleIndexSlice = createSlice({
  name: 'articleIndex',
  initialState: {
    articles: Object.values(articles),
    selectedArticles: [],
    selectedTags: [],
    allTags: allTags(),
    colorMap: colorMap(),
  },
  reducers: {
    setSelection: (state, action) => {
      state.selectedTags = action.payload;
      if(!action.payload) {
        state.selectedArticles = state.articles;
      } else {
        const selectedValues = new Set(action.payload.map(v => v.value));
        state.selectedArticles = state.articles.filter(article => article.tags.filter( x => selectedValues.has(x)).length > 0);
      }
    },
    decrement: state => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { decrement, incrementByAmount, setSelection } = articleIndexSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const incrementAsync = amount => dispatch => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount));
  }, 1000);
};

export default articleIndexSlice.reducer;
