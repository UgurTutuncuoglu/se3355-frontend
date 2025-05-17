export const ADD_TO_HISTORY = 'ADD_TO_HISTORY';

export const addToHistory = (newsCaption) => ({
  type: ADD_TO_HISTORY,
  payload: newsCaption,
});
