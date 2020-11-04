import {auth} from '../stores/auth';
import {counter} from '../stores/counter';

const useStore = () => {
  return {auth, counter};
};

export default useStore;
