import React from 'react'
import { Link } from 'react-router-dom'
import BaseLayout from '../Components/BaseLayout'

export default function About(props) {
    return (
        <>
            <BaseLayout col="col-sm-12">
                <div className="d-flex justify-content-between align-items-center">
                    <h1>About Page {props.location.state.name}</h1>
                    <Link to="/" className="btn btn-primary">Home</Link>
                </div>
                <hr />
            </BaseLayout>
        </>
    )
}
