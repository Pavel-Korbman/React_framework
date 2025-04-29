import { HI_BUTTON_CLICKED } from './actions'

const reducer1 = (state = 'Приветствие.', action) => {
  switch (action.type) {
    case HI_BUTTON_CLICKED:
      return 'Всем большой большой большой привет!';

    default:
      return state;
  }
};
export default reducer1;