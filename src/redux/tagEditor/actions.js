import { createAction } from 'redux-actions';

export const addExistingTag = createAction('ADD_EXISTING_TAG');

export const addExistingTags = createAction('ADD_EXISTING_TAGS');

export const addToTagList = createAction('ADD_TO_TAG_LIST');

export const removeFromTagList = createAction('REMOVE_FROM_TAG_LIST');
