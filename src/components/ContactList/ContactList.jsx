import React, { useEffect } from "react";
import { ContactListContainer} from "./ContactList.styled";
import { ContactItem } from "./Contacttem/ContactItem";
import {  useDispatch, useSelector } from "react-redux";
import { getContacts } from "redux/contactsSlice";
import { getStatusFilter } from "redux/filterSlice";
import { fetchContacts } from "redux/operations";
function ContactList() {
    const dispatch=useDispatch
    
    function findContacts() {
         
                // return contacts.filter(({name})=>name.toUpperCase().includes(filter.toUpperCase()))
    }
   
const contacts=useSelector(state=>state.contacts.items)

    console.dir(contacts)
     return (
            <ContactListContainer >
                {contacts.length>0 && (contacts.map(({ id, name, phone })=>{
                    return (
                        <ContactItem key={Number(id)} id={id} name={name} number={phone} />
                    )
                }))}
            </ContactListContainer>
        )
}


export default ContactList

