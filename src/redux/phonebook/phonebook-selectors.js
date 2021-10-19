import { createSelector } from 'reselect';
export const getContacts = state => state.phonebook.contacts;
export const getFilter = state => state.phonebook.filter;

export const getFilteredContacts = createSelector(
  getContacts,
  getFilter,
  (contacts, filter) =>  contacts.filter(({ name }) =>
        name.toLowerCase().includes(filter.toLowerCase()),
    ))

