import { createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';

import rootReduser from './rootReduser';

const enhancer = devToolsEnhancer();
const store = createStore(rootReduser, enhancer);

export default store;
