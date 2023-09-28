import React, { useEffect } from "react";
import { Form } from "components/Form/Form"
import { Filter } from "components/Filter/Filter"
import { ContactsList } from "components/ContactsList/ContactsList"
import { useDispatch, useSelector } from "react-redux";
import { requestContacts, selectError } from "redux/appReducer";
import { Helmet } from "react-helmet";
import { Container, UpTitle, BottomTitle } from "components/Emotion.styled";

function ContactsPage() {

  
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestContacts());
  }, [dispatch]);
  return (
    <Container>

        <Helmet>
          <meta charSet="utf-8" />
          <title>Contacts</title>
        </Helmet>

      <UpTitle>Phonebook</UpTitle>
      <Form />
      <BottomTitle>Contacts</BottomTitle>
      <Filter />
      <ContactsList />
      {!!error && <div>{error.message}</div>}
    </Container>
  )
}

export default ContactsPage;
