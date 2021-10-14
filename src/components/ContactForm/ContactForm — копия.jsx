import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ImUsers, ImProfile, ImPhone } from 'react-icons/im';

import { ContactForm, Label, Input, Button } from './ContactForm.styled';

export const Form = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameInputId = uuidv4();
  const numberInputId = uuidv4();

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(name, number);
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <ContactForm onSubmit={handleSubmit}>
      <Label htmlFor={nameInputId}>
        Name
        <ImProfile style={{ marginLeft: 15 }} />
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          value={name}
          onChange={handleChange}
          id={nameInputId}
        />
      </Label>
      <Label htmlFor={numberInputId}>
        Number
        <ImPhone style={{ marginLeft: 15 }} />
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          value={number}
          onChange={handleChange}
          id={numberInputId}
        />
      </Label>

      <Button type="submit">
        <ImUsers style={{ marginRight: 10 }} />
        Add contact
      </Button>
    </ContactForm>
  );
};
