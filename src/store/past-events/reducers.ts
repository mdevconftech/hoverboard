import {
  FETCH_PAST_EVENTS,
  FETCH_PAST_EVENTS_FAILURE,
  FETCH_PAST_EVENTS_SUCCESS,
} from './types';
import { initialPastEventsState } from './state';
import { PastEventActionTypes } from './types';

export const pastEventsReducer = (state = initialPastEventsState, action: PastEventActionTypes) => {
  switch (action.type) {
    case FETCH_PAST_EVENTS:
      return {
        ...state,
        ...{
          fetching: true,
          fetchingError: null,
          list: [],
        },
      };

    case FETCH_PAST_EVENTS_FAILURE:
      return {
        ...state,
        ...{
          fetching: false,
          fetchingError: action.payload.error,
        },
      };

    case FETCH_PAST_EVENTS_SUCCESS:
      return {
        ...state,
        ...{
          fetching: false,
          list: action.payload.list,
        },
      };

    default:
      return state;
  }
};
