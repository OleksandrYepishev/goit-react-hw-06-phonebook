import { useMemo } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import useDebounce from '../../Hooks/debounce-hook';
import phonebookActions from '../../redux/phonebook/phonebook-actions';
import {
  getFilter,
  getContacts,
} from '../../redux/phonebook/phonebook-selectors';

import { List, Item, Button } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();
  const onDeleteContact = id => dispatch(phonebookActions.deleteContact(id));

  const debouncedFilter = useDebounce(filter, 500);

  const getFilteredContacts = useMemo(() => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(debouncedFilter.toLowerCase()),
    );
  }, [contacts, debouncedFilter]);

  return (
    <List>
      {getFilteredContacts.map(({ id, name, number }) => (
        <Item key={id}>
          <span>{name}:</span> <span>{number}</span>
          <Button type="button" onClick={() => onDeleteContact(id)}>
            Delete
          </Button>
        </Item>
      ))}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    }),
  ),
  onDeleteContacts: PropTypes.func,
};
