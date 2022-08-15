import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import { ContactForm } from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import './App.module.css';


export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  formSubmit = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    this.state.contacts.some(
      i =>
        (i.name.toLowerCase() === contact.name.toLowerCase() &&
          i.number === contact.number) ||
        i.number === contact.number
    )
      ? alert(`${name} is already in contacts`)
      : this.setState(({ contacts }) => ({
          contacts: [contact, ...contacts],
        }));
  };

  changeFilterInput = e => {
    this.setState({ filter: e.target.value });
  };

  findContacts = () => {
    const { filter, contacts } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    return (
      <section>
        <div>
          <h1>Phonebook</h1>
          <ContactForm onSubmit={this.formSubmit} />
          <h2>Contacts</h2>
          <Filter filter={this.state.filter} changeFilterInput={this.changeFilterInput}/>
          <ContactList
            contacts={this.findContacts()}
            deleteContact={this.deleteContact}
          />
        </div>
      </section>
    );
  }
}
