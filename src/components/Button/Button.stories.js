import React from 'react';
import styled from 'styled-components/native';
import {action} from '@storybook/addon-actions';
import {text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react-native';
import Button from '.';

const CenterView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;

storiesOf('Button', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('with text', () => (
    <Button
      onPress={action('clicked-text')}
      text={text('Button text', '확인')}
    />
  ))
  .add('disabled', () => (
    <Button
      onPress={action('clicked-text')}
      text={text('Button text', '확인')}
      disabled
    />
  ));
