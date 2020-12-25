import React, { useState, useEffect } from "react";
import BaseLayout from "../BaseLayout/index";
import ContactForm from "./ContactForm";
import firebaseDB from "../../firebase";

export default function ContactList() {
    let [contactObject, setContactObject] = useState({});
    let [currentId, setCurrentId] = useState('');

    useEffect(() => {
        firebaseDB.child("contacts").on("value", (snapshot) => {
            if (snapshot.val() != null) {
                setContactObject({
                    ...snapshot.val(),
                });
            }
        });
    }, []);

    const addOrEdit = (obj) => {
        if(currentId === ''){
            firebaseDB.child("contacts").push(obj, (err) => {
                if (err) {
                    console.log(err);
                } else {
                    alert('Data Berhasil disimpan')
                }
            });
        }else{
            firebaseDB.child(`contacts/${currentId}`).set(obj, (err) => {
                if (err) {
                    console.log(err);
                } else {
                    alert('Data Berhasil diUpdate')
                }
            });
        }

        setCurrentId('')
    };

    const handleRemoveItem = (id) =>{
        firebaseDB.child(`contacts/${id}`).remove()
    }
    return (
        <BaseLayout col="col-sm-12">
            <div className="card">
                <div className="card-body">
                    <ContactForm {...({addOrEdit, currentId, contactObject})}/>
                </div>
            </div>
            <div className="card mt-5">
                <div className="card-body">
                    <div className="list-group">
                        {Object.keys(contactObject).map((id) => {
                            return (
                                <a
                                    key={id}
                                    className="list-group-item list-group-item-action">
                                    <div className="d-flex w-100 justify-content-between">
                                        <h5 className="mb-1">
                                            {contactObject[id].fullName}
                                        </h5>
                                        <small>{contactObject[id].email}</small>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <p className="mb-1">
                                            {contactObject[id].mobilePhone}
                                        </p>
                                        <div>
                                            <button className="btn btn-success ml-1" onClick={() => setCurrentId(id)}>Edit</button>
                                            <button className="btn btn-danger" onClick={()=>handleRemoveItem(id)}>Delete</button>
                                        </div>
                                    </div>
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>
        </BaseLayout>
    );
}
