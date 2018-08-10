import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 350px;
`;

export const TagEditorWrapper = styled.div`
  width: 100%;
  background: #fafafa;
  border: 1px solid #d5dadf;
  margin: 100px;
  padding: 10px 20px;
  border-radius: 6px;
  min-height: 220px;
  margin-left: 0;
  display: flex;
  flex-direction: column;
`;

// TODO: figure out best practices for implementing this
export const InputOverlay = styled.div`
  position: absolute;
  top: 42.3%;
  margin-left: 20px;
`;

export const TagEditorTitle = styled.h5`
  margin: 0px;
  font-weight: 500;
`;

export const InputWrapper = styled.div`
  height: 20px;
  width: 200px;
  border: 1px solid rgba(189, 195, 199, 0.4);
  background-color: #fff;
  border-radius: 4px;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Input = styled.input`
  border: none;
  width: 100%;
  font-family: inherit;

  &::-webkit-input-placeholder {
    opacity: 0.4;
    font-size: 12px;
  }

  &:focus {
    outline: none;
  }
`;

export const OptionsWrapper = styled.div`
  background-color: #fff;
  border: 1px solid rgba(189, 195, 199, 0.4);
  border-radius: 4px;
  width: 210px;
  margin-top: 4px;
`;

export const Option = styled.div`
  display: flex;
  align-items: center;
  margin: 3px 0;
  padding: 5px;

  &:hover {
    background-color: rgba(189, 195, 199, 0.2);
    cursor: pointer;
  }
`;

export const ColorSquare = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 3px;
  background-color: ${({ color }) => color || 'red'};
  margin-right: 6px;
`;

export const OptionText = styled.span`
  font-size: 14px;
`;

export const HorizontalRule = styled.hr`
  opacity: 0.3;
  width: 100%;
`;

export const ActionsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const Button = styled.div`
  height: 27.6px;
  width: 80px;
  border-radius: 3px;
  background-color: #2f3640;
  color: #fff;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`;
