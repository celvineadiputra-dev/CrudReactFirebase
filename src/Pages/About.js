import React from 'react'
import { Link } from 'react-router-dom'

export default function About(props) {
    return (
        <>
            <div>
                <h1>About Page {props.location.state.name}</h1>
                <Link to="/">Home</Link>
            </div>
        </>
    )
}
