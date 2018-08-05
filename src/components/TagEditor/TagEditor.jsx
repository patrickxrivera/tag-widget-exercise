import React, { Component } from 'react';
import { ChevronDown } from 'react-feather';

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

class TagEditor extends Component {
  state = {
    tagInputIsFocused: false
  };

  toggleTagInputFocus = () => this.setState({ tagInputIsFocused: !this.state.tagInputIsFocused });

  renderTag = ({ label, color }) => (
    <Option key={`${label}-${color}`} color={color}>
      <ColorSquare color={color} />
      <OptionText>{label}</OptionText>
    </Option>
  );

  render() {
    const { tagInputIsFocused } = this.state;
    const tags = tagsJSON['tags:'].map(this.renderTag);

    return (
      <TagEditorWrapper>
        <TagEditorTitle>TAGS</TagEditorTitle>
        <HorizontalRule />
        {/* using onClick instead of onFocus so clicking the Chevron still triggers focus */}
        <InputWrapper onFocus={this.toggleTagInputFocus}>
          <Input placeholder="Type to add a tag." />
          <ChevronDown style={{ opacity: 0.3 }} size={20} onClick={this.toggleTagInputFocus} />
        </InputWrapper>
        {tagInputIsFocused && <OptionsWrapper>{tags}</OptionsWrapper>}
      </TagEditorWrapper>
    );
  }
}

export default TagEditor;
