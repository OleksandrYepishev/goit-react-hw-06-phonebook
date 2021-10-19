import { createAction, nanoid  } from '@reduxjs/toolkit';

const addContact = createAction('phonebook/add', ( name, number) => ({
    payload: {
        id: nanoid(),
        name,
        number,
    }
}));

const deleteContact = createAction('phonebook/delete');
const changeFilter = createAction('phonebook/changeFilter');

export default {addContact, deleteContact, changeFilter};