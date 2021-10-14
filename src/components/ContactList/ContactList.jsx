import React from 'react';

import { List, Item, Button } from './ContactList.styled';

export const ContactList = ({ contacts, onDeleteContact }) => (
  <List>
    {contacts.map(({ id, name, number }) => (
      <Item key={id}>
        <span>{name}:</span> <span>{number}</span>
        <Button type="button" onClick={() => onDeleteContact(id)}>
          Delete
        </Button>
      </Item>
    ))}
  </List>
);
