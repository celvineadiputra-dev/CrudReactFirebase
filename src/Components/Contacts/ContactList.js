import React, { useState, useEffect } from "react";
import BaseLayout from "../BaseLayout/index";
import ContactForm from "./ContactForm";
import firebaseDB from "../../firebase";

export default function ContactList() {
    let [contactObject, setContactObject] = useState({});

    useEffect(() => {
        firebaseDB.child('contacts').on('value', snapshot => {
            if (snapshot.val() != null) {
                setContactObject({
                    ...snapshot.val()
                })
            }
        })
    }, [])

    const addOrEdit = obj => {
        firebaseDB.child('contacts').push(obj, err => {
            if (err) {
                console.log(err);
            }
        });
    }
    return (
        <BaseLayout col="col-sm-12">
            <div className="card">
                <div className="card-body">
                    <ContactForm addOrEdit={addOrEdit} />
                </div>
            </div>
            <div className="card mt-5">
                <div className="card-body">
                    <div className="list-group">
                        {
                            Object.keys(contactObject).map(id => {
                                return <a
                                    key={id}
                                    className="list-group-item list-group-item-action">
                                    <div className="d-flex w-100 justify-content-between">
                                        <h5 className="mb-1">{contactObject[id].fullName}</h5>
                                        <small>{contactObject[id].email}</small>
                                    </div>
                                    <p className="mb-1">
                                        {contactObject[id].mobilePhone}
                                    </p>
                                </a>
                            })
                        }
                    </div>
                </div>
            </div>
        </BaseLayout>
    );
}
