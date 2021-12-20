import { giveMoneySanta, GIVE_MONEY_SANTA } from '../action/giveMoney';

type MoneyState = {
  money: number;
};
const initialState: MoneyState = {
  money: 0,
};

type GiveMoneyAction = ReturnType<typeof giveMoneySanta>;

function giveMoneyReducer(
  state: MoneyState = initialState,
  action: GiveMoneyAction
) {
  switch (action.type) {
    case GIVE_MONEY_SANTA:
      return { money: state.money + 1 };
    default:
      return state;
  }
}

export default giveMoneyReducer;
