import React from 'react';

import Instructions from '../Instructions';
import TagEditorContainer from '../TagEditor/container.jsx';

import './App.css';

function App() {
  return (
    <div className="app">
      <div className="app-child">
        <Instructions />
      </div>
      <div className="app-child">
        <TagEditorContainer />
      </div>
    </div>
  );
}

export default App;
