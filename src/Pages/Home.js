import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <>
            <div>
                Home Page
                <Link to={{
                    pathname:"/about/celvine",
                    state:{
                        name : "Celvine Adi Putra",
                        born : "2000-02-10"
                    }
                }}>About</Link>
            </div>
        </>
    )
}
