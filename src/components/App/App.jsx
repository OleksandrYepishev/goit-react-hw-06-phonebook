import { Form } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import { Container } from '../Container/Container';
import { Title } from './App.styled';

export const App = () => {
  return (
    <Container>
      <Title>
        Phonebook
        <Form />
      </Title>
      <Title>
        Contacts
        <Filter />
        <ContactList />
      </Title>
    </Container>
  );
};
