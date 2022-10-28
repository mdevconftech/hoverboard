import { PastEventsState } from './types';

export const initialPastEventsState: PastEventsState = {
  fetching: false,
  fetchingError: null,
  list: []
};
