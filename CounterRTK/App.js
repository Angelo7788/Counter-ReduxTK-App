import React from 'react';
import Counter from './src/containers/Counter';
import { Provider } from 'react-redux';
import store from './src/reducer/store';


const App = () => {
  return(
    <Provider  store={store}  >
    <Counter/>
    </Provider>
  )
};

export default App;
