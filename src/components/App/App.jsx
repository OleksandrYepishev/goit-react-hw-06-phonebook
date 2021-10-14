import { useState, useEffect, useRef, useMemo } from 'react';
import { v4 as uuidv4 } from 'uuid';

import initialContacts from '../../data/contacts.json';
import useDebounce from '../../Hooks/debounce-hook';

import { Form } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import { Container } from '../Container/Container';

import { Title } from './App.styled';

export const App = () => {
  const [contacts, setContacts] = useState(initialContacts);
  const [filter, setFilter] = useState('');
  const isFirstRender = useRef(true);
  const localStorageKeyNane = 'contacts';

  useEffect(() => {
    const localContacts = localStorage.getItem(localStorageKeyNane);
    const parsedContacts = JSON.parse(localContacts);

    parsedContacts && setContacts(parsedContacts);
  }, []);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    localStorage.setItem(localStorageKeyNane, JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ({ name, number }) => {
    const newContact = {
      id: uuidv4(),
      name,
      number,
    };

    const isDoubleContact = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase(),
    );

    if (isDoubleContact) {
      alert(`${name} is already in contacts`);
      return;
    }

    setContacts(prevContacts => [newContact, ...prevContacts]);
  };

  const deleteContact = contactId => {
    return setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId),
    );
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const debouncedFilter = useDebounce(filter, 500);

  const getFilteredContacts = useMemo(() => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(debouncedFilter.toLowerCase()),
    );
  }, [contacts, debouncedFilter]);

  return (
    <Container>
      <Title>
        Phonebook
        <Form onSubmit={addContact} />
      </Title>
      <Title>
        Contacts
        <Filter value={filter} onChange={changeFilter} />
        <ContactList
          contacts={getFilteredContacts}
          onDeleteContact={deleteContact}
        />
      </Title>
    </Container>
  );
};
