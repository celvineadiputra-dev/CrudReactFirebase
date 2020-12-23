import React from 'react'
import { Link } from 'react-router-dom'
import BaseLayout from "../Components/BaseLayout/index"
import ContactList from "../Components/Contacts/ContactList"

export default function Home() {
    return (
        <>
            <BaseLayout col="col-sm-12">
                <div className="d-flex justify-content-between align-items-center">
                    <h1>Home Page</h1>
                    <Link to={{
                        pathname: "/about/celvine",
                        state: {
                            name: "Celvine Adi Putra",
                            born: "2000-02-10"
                        }
                    }} className="btn btn-primary">About</Link>
                </div>
                <hr/>
                <ContactList/>
                
            </BaseLayout>
        </>
    )
}
