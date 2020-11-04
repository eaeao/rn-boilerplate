import {observable, runInAction} from 'mobx';
import {login} from '../services/AuthService';
import AsyncStorage from '@react-native-async-storage/async-storage';

const auth = observable({
  user: null,
  async login() {
    const data = await login('', '');

    runInAction(() => {
      this.user = data.origin;
    });

    AsyncStorage.setItem('token', data.origin);
  },
});

export {auth};
