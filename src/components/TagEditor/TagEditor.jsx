import React, { Component } from 'react';

// An array of existing tags. Just uncomment when you want to use them.
// import tagsJSON from '../../api/tags.json';

import './TagEditor.css';

class TagEditor extends Component {

  render() {
    return (
      <div className="tag-editor">
        <h5 className="tag-editor-title">TAGS</h5>
        <span
          style={{color: '#d5dadf', fontSize: '12px', paddingTop: '15px'}}
          /* you can remove this span */
        >
          /*
            The rest of the code shoud be placed here and is up to you.
            This is a starting point to let your ideas run free.
          */
        </span>
      </div>
    );
  }
}

export default TagEditor;
