import React from 'react';
import { connect } from 'react-redux';
import contactsActions from '../../redux/contacts-actions';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContacts }) => (
  <>
    <h2 className={styles.title}>Contacts</h2>
    <ul className={styles.list}>
      {contacts.map(({ id, name, number }) => (
        <li className={styles.item} key={id}>
          <span className={styles.text}>
            {name}: {number}
          </span>

          <button
            className={styles.btn}
            type="button"
            onClick={() => onDeleteContacts(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  </>
);

const getVisibleContacts = (allContacts, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return allContacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter),
  );
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: getVisibleContacts(items, filter),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContacts: id => dispatch(contactsActions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
