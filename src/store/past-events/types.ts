import { PastEvent } from '../../models/past-event';

export const FETCH_PAST_EVENTS = 'app/PastEvents/FETCH_PAST_EVENTS';
export const FETCH_PAST_EVENTS_FAILURE = 'app/PastEvents/FETCH_PAST_EVENTS_FAILURE';
export const FETCH_PAST_EVENTS_SUCCESS = 'app/PastEvents/FETCH_PAST_EVENTS_SUCCESS';

export interface PastEventsState {
  fetching: boolean;
  fetchingError: Error;
  list: PastEvent[];
}

interface FetchPastEventsAction {
  type: typeof FETCH_PAST_EVENTS;
}

interface FetchPastEventsFailureAction {
  type: typeof FETCH_PAST_EVENTS_FAILURE;
  payload: {
    error: Error;
  };
}

interface FetchPastEventsSuccessAction {
  type: typeof FETCH_PAST_EVENTS_SUCCESS;
  payload: {
    list: PastEvent[];
  };
}

export type PastEventActionTypes =
  | FetchPastEventsAction
  | FetchPastEventsFailureAction
  | FetchPastEventsSuccessAction;
