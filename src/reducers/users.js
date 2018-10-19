import { RECEIVE_USERS } from '../actions/users'
import { SAVE_ANSWER  } from '../actions/questions'

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users
      };
    case SAVE_ANSWER:
      const user = state[action.authedUser];
      return {
        ...state,
        [action.authedUser]: {
          ...user,
          answer: {
            ...user.answer,
            [action.qid]: action.answer
          }
        }
      };
    default:
      return state;
  }
}
