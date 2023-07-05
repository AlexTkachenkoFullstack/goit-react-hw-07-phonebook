
import React, { useEffect } from 'react';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter';
import { AppContainer, ApiTitleH1, ApiTitleH2 } from './App.styled';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operations';


function App() {
  const dispatch=useDispatch()
  useEffect(() => { dispatch(fetchContacts()) },
        [dispatch]
  )
  console.log(dispatch(fetchContacts()))
  return (
      <AppContainer>
         <ApiTitleH1>Phonebook</ApiTitleH1>
         <ContactForm />
         <ApiTitleH2>Contacts</ApiTitleH2>
         <Filter  />
        <ContactList/>
      </AppContainer>
    )
}

export default App
