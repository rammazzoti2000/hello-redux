import { setTechnology } from '../actions/index';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  console.log(action)
  switch (action.type) {
    case setTechnology().type:
      return {
        ...state,
        tech: action.tech
      }
    default:
      return state
  }
}
