import { Component } from 'react';
import PropTypes from 'prop-types';
import ContactList from './component/ContactList';
import ContactForm from './component/ContactForm';
import Filter from './component/Filter';
import Section from './component/Section';
import './App.css';

class App extends Component {
  static propTypes = {
    contacts: PropTypes.array,
    filter: PropTypes.string,
  };
  render() {
    return (
      <>
        <Section title="Phonebook">
          <ContactForm />

          <Filter />
          <ContactList />
        </Section>
      </>
    );
  }
}

export default App;
