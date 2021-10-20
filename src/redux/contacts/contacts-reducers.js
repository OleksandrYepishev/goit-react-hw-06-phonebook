import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from '../contacts/contacts-actions';
import initialContacts from '../../data/contacts.json';

const contacts = createReducer(initialContacts,{
  [actions.addContact]: (state, { payload }) => [...state, payload],
  [actions.deleteContact]: (state, {payload}) => state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [actions.changeFilter]: (_state, {payload}) => payload,
});

export default combineReducers({ contacts, filter, });