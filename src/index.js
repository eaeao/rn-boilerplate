import React from 'react';
import {Pressable, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {useObserver} from 'mobx-react';
import useStore from './hooks/useStore';

const Index = () => {
  const {counter} = useStore();

  const increase = () => {
    counter.increase();
  };

  const decrease = () => {
    counter.decrease();
  };

  return useObserver(() => (
    <>
      <SafeAreaView>
        <View style={styles.container}>
          <Text>{counter.number}</Text>
          <Pressable onPress={increase}>
            <Text>+</Text>
          </Pressable>
          <Pressable onPress={decrease}>
            <Text>-</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </>
  ));
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Index;
