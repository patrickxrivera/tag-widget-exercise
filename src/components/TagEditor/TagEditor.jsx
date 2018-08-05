import React, { Component } from 'react';
import { ChevronDown, X } from 'react-feather';

import {
  InputWrapper,
  Input,
  ColorSquare,
  OptionsWrapper,
  OptionText,
  Option,
  HorizontalRule,
  TagEditorTitle,
  TagEditorWrapper
} from './styles';
import tagsJSON from '../../api/tags.json';
import { loadStateFromCache, saveStateToCache } from '../../utils/localStorage';

const TAGS_CACHE_KEY = 'tags';

class TagEditor extends Component {
  state = {
    tagInputIsFocused: false,
    tags: null,
    inputValue: ''
  };

  componentDidMount() {
    this.getTags();
  }

  getTags = () => {
    const tags = loadStateFromCache(TAGS_CACHE_KEY);
    tags ? this.handleCacheHit(tags) : this.handleCacheMiss();
  };

  handleCacheHit = (tags) => this.setState({ tags });

  handleCacheMiss = async () => {
    await this.setState({ tags: tagsJSON['tags:'] });
    this.saveTagsToCache();
  };

  handleInputSubmit = async (e) => {
    e.preventDefault();

    const newTag = {
      label: this.state.inputValue,
      color: 'red'
    };

    await this.setState((prevState) => ({
      ...prevState,
      tags: [...prevState.tags, newTag]
    }));

    this.saveTagsToCache();
  };

  saveTagsToCache = () => {
    saveStateToCache(this.state.tags, TAGS_CACHE_KEY);
  };

  handleInputChange = (e) => this.setState({ inputValue: e.target.value });

  toggleInputFocus = () => this.setState({ tagInputIsFocused: !this.state.tagInputIsFocused });

  renderTag = ({ label, color }) => (
    <Option key={`${label}-${color}`} color={color}>
      <ColorSquare color={color} />
      <OptionText>{label}</OptionText>
    </Option>
  );

  render() {
    const { tagInputIsFocused, inputValue, tags } = this.state;
    const renderedTags = tags ? tags.map(this.renderTag) : [];

    return (
      <div>
        <TagEditorWrapper>
          <TagEditorTitle>TAGS</TagEditorTitle>
          <HorizontalRule />
        </TagEditorWrapper>
        <div>
          <form onSubmit={this.handleInputSubmit}>
            <InputWrapper onFocus={this.toggleInputFocus}>
              <Input
                placeholder="Type to add a tag."
                value={inputValue}
                onChange={this.handleInputChange}
              />
              {tagInputIsFocused ? (
                <X style={{ opacity: 0.3 }} size={16} onClick={this.toggleInputFocus} />
              ) : (
                <ChevronDown style={{ opacity: 0.3 }} size={20} onClick={this.toggleInputFocus} />
              )}
            </InputWrapper>
          </form>
          {tagInputIsFocused && <OptionsWrapper>{renderedTags}</OptionsWrapper>}
        </div>
      </div>
    );
  }
}

export default TagEditor;
