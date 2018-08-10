import React, { Component } from 'react';
import { connect } from 'react-redux';

import tagsJSON from '../../api/tags.json';
import { addExistingTags, addExistingTag } from '../../redux/tagEditor/actions';
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
    const tags = tagsJSON['tags:'];
    this.props.addExistingTags(tags);
  };

  handleInputSubmit = async (e) => {
    e.preventDefault();

    const newTag = {
      label: this.state.inputValue,
      color: 'red'
    };

    this.props.addExistingTag(newTag);
  };

  handleInputChange = (e) => this.setState({ inputValue: e.target.value });

  toggleInputFocus = () => this.setState({ tagInputIsFocused: !this.state.tagInputIsFocused });

  render() {
    return (
      <TagEditor
        handleInputChange={this.handleInputChange}
        handleInputSubmit={this.handleInputSubmit}
        toggleInputFocus={this.toggleInputFocus}
        existingTags={this.props.existingTags}
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

export default connect(mapStateToProps, { addExistingTags, addExistingTag })(TagEditorContainer);
