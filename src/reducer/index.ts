import { combineReducers } from 'redux';
import giveMoneyReducer from './giveMoneyReducer';

const rootReducer = combineReducers({
  giveMoneyReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
