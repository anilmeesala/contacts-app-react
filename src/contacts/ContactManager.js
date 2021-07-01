import {Header} from "./header";
import {ContactForm} from "./contactForm";
import {ContactList} from "./contactList";
import {Footer} from "./footer";
import {useState} from "react";
import uuid4 from "uuid4";
import './contact-manager.css'


export const ContactManager = () => {
    let [contacts, setContacts] = useState([]);
    let [editMode, setEditMode] = useState(false);
    let [selContact, setSelContact] = useState(null);

    const addContact = (contact) => {
        setContacts([...contacts, {id: uuid4(), ...contact}]);
    }

    const deleteContact = (contact) => {
        setContacts(contacts.filter(c => c.id !== contact.id));
    }
    const editContact = (contact) => {
        //     setContacts()
        setEditMode(true);
        setSelContact(contact);
    };
    const updateContact = (contact) => {
        console.log("contacts", contacts);
        console.log("update", contact);
        setEditMode(false);
        let indexToUpdate = contacts.findIndex(c => c.id === contact.id);
        contacts[indexToUpdate] = contact;
        setContacts(contacts);
    }
    return (
        <div className="container">
            <div className="row align-items-center">
                    <div className="col-3"></div>
                    <div className="col-6">
                        <Header/>
                        <ContactForm addContact={addContact} editMode={editMode}
                                     updateContact={updateContact} selContact={selContact}/>
                        <ContactList contacts={contacts} deleteContact={deleteContact}
                                     editContact={editContact}/>
                        <Footer/>
                    </div>
            </div>
        </div>
    )
}