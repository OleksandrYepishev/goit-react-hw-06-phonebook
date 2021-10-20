import { createAction, nanoid  } from '@reduxjs/toolkit';

const addContact = createAction('phonebook/add', (data) => ({
    payload: {
        id: nanoid(),
        ...data
    }
}));

const deleteContact = createAction('phonebook/delete');
export const changeFilter = createAction('phonebook/changeFilter');

export default {addContact, deleteContact, changeFilter};