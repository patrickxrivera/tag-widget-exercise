import React, { Component } from 'react';
import { connect } from 'react-redux';
import getId from 'uuid/v4';

import tagsJSON from '../../api/tags.json';
import * as actions from '../../redux/tagEditor/actions';
import TagEditor from './';

const isEmpty = (arr) => !arr.length;

class TagEditorContainer extends Component {
  state = {
    tagInputIsFocused: false,
    inputValue: ''
  };

  componentDidMount() {
    this.getTags();
  }

  getTags = () => {
    const { existingTags } = this.props;
    isEmpty(existingTags) && this.handleCacheMiss();
  };

  handleCacheMiss = async () => {
    const tags = tagsJSON['tags:'].map((tag) => ({ ...tag, id: getId() }));
    this.props.addExistingTags(tags);
  };

  handleAddTagClick = async (e) => {
    e.preventDefault();

    const newTag = {
      label: this.state.inputValue,
      color: 'red',
      id: getId()
    };

    this.props.addToTagList(newTag);

    this.setState({ inputValue: '' });
  };

  handleRemoveTagClick = (tag) => () => {
    this.props.removeFromTagList(tag);
  };

  handleInputChange = (e) => this.setState({ inputValue: e.target.value });

  toggleInputFocus = () => this.setState({ tagInputIsFocused: !this.state.tagInputIsFocused });

  render() {
    return (
      <TagEditor
        handleInputChange={this.handleInputChange}
        handleAddTagClick={this.handleAddTagClick}
        handleRemoveTagClick={this.handleRemoveTagClick}
        toggleInputFocus={this.toggleInputFocus}
        existingTags={this.props.existingTags}
        tagList={this.props.tagList}
        {...this.state}
      />
    );
  }
}

const getExistingTags = (state) => state.tags.existingTags;

const getTagList = (state) => state.tags.tagList;

const mapStateToProps = (state) => ({
  existingTags: getExistingTags(state),
  tagList: getTagList(state)
});

export default connect(mapStateToProps, { ...actions })(TagEditorContainer);
