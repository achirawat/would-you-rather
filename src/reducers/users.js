import { RECEIVE_USERS } from '../actions/users'

export default function users (state = {}, action) {
  switch(action.type) {
    case RECEIVE_USERS :
      return {
        ...state,
        ...action.users
      }
    case SAVE_ANSWER :
    const user = state
      return {
        ...state,
        [action.authedUser]: {
          ...user,
          answers: {
            ...user.answers,
            [action.id]: action.answer
          }
        }
      }
    default :
      return state
  }
}