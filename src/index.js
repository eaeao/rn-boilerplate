import React from 'react';
import {Pressable, SafeAreaView, Text} from 'react-native';
import styled from 'styled-components/native';
import {useObserver} from 'mobx-react';
import useStore from './hooks/useStore';

const Container = styled.View`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 30px;
`;

const Index = () => {
  const {auth, counter} = useStore();

  const increase = () => {
    counter.increase();
  };

  const decrease = () => {
    counter.decrease();
  };

  const login = () => {
    auth.login();
  };

  return useObserver(() => (
    <>
      <SafeAreaView>
        <Container>
          <Title>count : {counter.number}</Title>
          <Pressable onPress={increase}>
            <Text>+</Text>
          </Pressable>
          <Pressable onPress={decrease}>
            <Text>-</Text>
          </Pressable>
          <Title style={{marginTop: 100}}>user : {auth.user}</Title>
          <Pressable onPress={login}>
            <Text>Login</Text>
          </Pressable>
        </Container>
      </SafeAreaView>
    </>
  ));
};

export default Index;
