import { handleActions } from 'redux-actions';

const initialState = {
  existingTags: [],
  tagList: []
};

export default handleActions(
  {
    ADD_EXISTING_TAG: (state, { payload }) => ({
      ...state,
      existingTags: [...state.existingTags, payload]
    }),
    ADD_EXISTING_TAGS: (state, { payload }) => ({
      ...state,
      existingTags: [...state.existingTags, ...payload]
    })
  },
  initialState
);
