import { createStore, Store } from 'redux';
import IStore from '../models/StoreInterface';
import rootReducer from './rootReducer'
import { History } from 'history';

const rootStore = (initialState: Partial<any>, history: History): Store<IStore> => {
    const store: Store<IStore> = createStore(rootReducer(history), initialState as any);

    return store
}

export default rootStore