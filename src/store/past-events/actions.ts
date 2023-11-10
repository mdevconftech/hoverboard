import { Dispatch } from 'redux';
import {
  FETCH_PAST_EVENTS,
  FETCH_PAST_EVENTS_FAILURE,
  FETCH_PAST_EVENTS_SUCCESS,
} from './types';
import { db } from '../db';

const _getPastEventsItems = (groupId: string) =>
  db()
    .collection('pastEvents')
    .doc(groupId)
    .collection('items')
    .get()
    .then((snaps) => {
      return snaps.docs
        .map((snap) => Object.assign({}, snap.data(), { id: snap.id }))
        .sort((a, b) => a.order - b.order);
    });

export const fetchPastEvents = () => (dispatch: Dispatch) => {
  dispatch({
    type: FETCH_PAST_EVENTS,
  });

  db()
    .collection('pastEvents')
    .get()
    .then((snaps) =>
      Promise.all(
        snaps.docs.map((snap) => Promise.all([snap.data(), snap.id, _getPastEventsItems(snap.id)]))
      )
    )
    .then((groups) =>
      groups.map(([group, id, items]) => {
        return Object.assign({}, group, { id, items });
      })
    )
    .then((list) => {
      dispatch({
        type: FETCH_PAST_EVENTS_SUCCESS,
        payload: {
          list,
        },
      });
    })
    .catch((error) => {
      dispatch({
        type: FETCH_PAST_EVENTS_FAILURE,
        payload: { error },
      });
    });
};
