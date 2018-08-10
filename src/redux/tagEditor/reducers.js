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
    }),
    ADD_TO_TAG_LIST: (state, { payload }) => {
      debugger;
      return {
        ...state,
        tagList: [...state.tagList, payload]
      };
    },
    REMOVE_FROM_TAG_LIST: (state, { payload }) => ({
      ...state,
      tagList: state.tagList.filter((tag) => tag.id !== payload.id),
      existingTags: [...state.existingTags, payload]
    })
  },
  initialState
);
