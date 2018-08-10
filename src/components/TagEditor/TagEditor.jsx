import React from 'react';
import { ChevronDown, X } from 'react-feather';

import {
  Wrapper,
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
  Button,
  TagListWrapper,
  TagListItemWrapper,
  TagListItemText,
  DeleteIconWrapper,
  EmptyTagListText,
  TagsWrapper
} from './styles';

const renderTag = ({ label, color, id }) => (
  <Option key={id} color={color}>
    <ColorSquare color={color} />
    <OptionText>{label}</OptionText>
  </Option>
);

const renderTagListItem = (handleRemoveTagClick) => (tag) => (
  <TagListItemWrapper key={tag.id}>
    <div>
      <TagListItemText>{tag.label}</TagListItemText>
    </div>
    <div style={{ height: '100%' }}>
      <DeleteIconWrapper>
        <X
          size={10}
          color="#fff"
          strokeWidth="4"
          style={{ marginLeft: '5px', marginRight: '5px' }}
          onClick={handleRemoveTagClick(tag)}
        />
      </DeleteIconWrapper>
    </div>
  </TagListItemWrapper>
);

const TagEditor = ({
  handleInputChange,
  toggleInputFocus,
  handleAddTagClick,
  handleRemoveTagClick,
  tagInputIsFocused,
  existingTags,
  tagList,
  inputValue
}) => (
  <Wrapper>
    <TagEditorWrapper>
      <TagEditorTitle>TAGS</TagEditorTitle>
      <TagsWrapper>
        {tagList.length ? (
          <TagListWrapper>{tagList.map(renderTagListItem(handleRemoveTagClick))}</TagListWrapper>
        ) : (
          <EmptyTagListText style={{ fontSize: '14px' }}>
            No tags added yet. Add one below!
          </EmptyTagListText>
        )}
      </TagsWrapper>
      <HorizontalRule />
      <ActionsWrapper>
        <form onSubmit={handleAddTagClick}>
          <InputWrapper onFocus={toggleInputFocus}>
            <Input
              placeholder="Type to add a tag."
              value={inputValue}
              onChange={handleInputChange}
            />
            {tagInputIsFocused ? (
              <X style={{ opacity: 0.3 }} size={16} onClick={toggleInputFocus} />
            ) : (
              <ChevronDown style={{ opacity: 0.3 }} size={20} onClick={toggleInputFocus} />
            )}
          </InputWrapper>
        </form>
        {tagInputIsFocused && <OptionsWrapper>{existingTags.map(renderTag)}</OptionsWrapper>}
        <Button onClick={handleAddTagClick}>Add Tag</Button>
      </ActionsWrapper>
    </TagEditorWrapper>
  </Wrapper>
);

export default TagEditor;
