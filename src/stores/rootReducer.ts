import { History } from 'history';
import { combineReducers, ReducersMapObject, Reducer} from 'redux';
import IStore from '../models/StoreInterface';
import { connectRouter } from 'connected-react-router';
import authReducer from './reducer/authReducer';

const rootReducer = (history: History): Reducer<IStore> => {
    const reducerMap: ReducersMapObject<IStore> = {
        router: connectRouter(history) as any,
        authRequest: authReducer
    }
    return combineReducers(reducerMap)
}

export default rootReducer