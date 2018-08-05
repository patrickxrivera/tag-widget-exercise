import React from 'react';

import Instructions from '../Instructions';
import TagEditor from '../TagEditor';

import './App.css';

function App() {
  return (
    <div className="app">
      <div className="app-child">
        <Instructions />
      </div>
      <div className="app-child">
        <TagEditor />
      </div>
    </div>
  );
}

export default App;
