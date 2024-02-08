import { createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';

import reduser from './reducer';

const enhancer = devToolsEnhancer();
const store = createStore(reduser, enhancer);

export default store;
