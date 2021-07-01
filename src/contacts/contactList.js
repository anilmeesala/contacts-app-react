import {useEffect} from "react";
import './contact.-list.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle';

export function ContactList(props) {
    useEffect(()=>{
        console.log("Test",props.contacts)
    },[props.contacts]);
    return (

        <div>
            {
                props.contacts.map(c => <div className="contact container" key={c.id}>
                        <div>Name:{c.name}</div>
                        <div>{c.email}</div>
                        <div>{c.phonePrimary}</div>
                        <div>{c.phoneSec}</div>
                        <div className="trash">
                            <button className="btn" onClick={(evt)=>props.deleteContact(c)}><i className="fa fa-trash"></i></button>
                        </div>
                        <div className="edit">
                            <button className="btn" onClick={(evt)=>{props.editContact(c)}}>
                                <i className="fa fa-edit"></i>
                            </button>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

