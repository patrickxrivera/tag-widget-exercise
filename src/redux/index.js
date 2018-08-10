import { combineReducers } from 'redux';

import tagEditorReducer from './tagEditor/reducers';

const rootReducer = combineReducers({
  tags: tagEditorReducer
});

export default rootReducer;
