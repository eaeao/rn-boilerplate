import React from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';

const Pressable = styled.Pressable`
  width: 100%;
  height: 44px;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.disabled ? '#aaa' : '#000')};
  border-radius: 5px;
`;

const Text = styled.Text`
  font-size: 16px;
  color: #fff;
`;

export default function Button({onPress, text, disabled}) {
  return (
    <Pressable onPress={disabled ? null : onPress} disabled={disabled}>
      <Text>{text}</Text>
    </Pressable>
  );
}

Button.defaultProps = {
  text: '',
  onPress: () => {},
  disabled: false,
};

Button.propTypes = {
  children: PropTypes.string,
  onPress: PropTypes.func,
  disabled: PropTypes.bool,
};
