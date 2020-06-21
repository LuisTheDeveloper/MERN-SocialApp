import { SET_ALERT, REMOVE_ALERT, SET_ALERT_INIT } from "../actions/types";

const initialState = [];

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_ALERT:
      return [...state, payload];
    case REMOVE_ALERT:
      return [state.filter((alert) => alert.id !== payload.id), payload];
    case SET_ALERT_INIT:
      return (state = initialState);
    default:
      return state;
  }
}
