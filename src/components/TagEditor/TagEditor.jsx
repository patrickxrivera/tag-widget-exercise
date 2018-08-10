import React from 'react';
import { ChevronDown, X } from 'react-feather';

import {
  Wrapper,
  InputOverlay,
  InputWrapper,
  Input,
  ColorSquare,
  OptionsWrapper,
  OptionText,
  Option,
  HorizontalRule,
  TagEditorTitle,
  TagEditorWrapper,
  ActionsWrapper,
  Button
} from './styles';

const renderTag = ({ label, color }) => (
  <Option key={`${label}-${color}`} color={color}>
    <ColorSquare color={color} />
    <OptionText>{label}</OptionText>
  </Option>
);

const TagEditor = ({
  handleInputChange,
  toggleInputFocus,
  handleInputSubmit,
  tagInputIsFocused,
  existingTags,
  inputValue
}) => (
  <Wrapper>
    <TagEditorWrapper>
      <TagEditorTitle>TAGS</TagEditorTitle>
      <HorizontalRule />
      <ActionsWrapper>
        <Button>Add Tag</Button>
      </ActionsWrapper>
    </TagEditorWrapper>
    <InputOverlay>
      <form onSubmit={handleInputSubmit}>
        <InputWrapper onFocus={toggleInputFocus}>
          <Input placeholder="Type to add a tag." value={inputValue} onChange={handleInputChange} />
          {tagInputIsFocused ? (
            <X style={{ opacity: 0.3 }} size={16} onClick={toggleInputFocus} />
          ) : (
            <ChevronDown style={{ opacity: 0.3 }} size={20} onClick={toggleInputFocus} />
          )}
        </InputWrapper>
      </form>
      {tagInputIsFocused && <OptionsWrapper>{existingTags.map(renderTag)}</OptionsWrapper>}
    </InputOverlay>
  </Wrapper>
);

export default TagEditor;
