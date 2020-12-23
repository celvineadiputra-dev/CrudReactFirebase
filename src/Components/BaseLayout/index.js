import React from 'react'

export default function BaseLayout(props) {
    return (
        <div className="container">
            <div className="row">
                <div className={props.col}>
                    {props.children}
                </div>
            </div>
        </div>
    )
}
