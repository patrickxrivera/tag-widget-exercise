import React from 'react';

const TagInput = ({}) => (
  <InputOverlay>
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
  </InputOverlay>
);

export default TagInput;
