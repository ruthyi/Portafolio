import React from 'react'

const Referen = (props) => {
    const {person:{id, name, cargo, linkeding}}=props;
    return (
        <div className="person rounded-circle d-flex justify-content-center align-self-center align-items-center p-4">
            <a className='p-4' href={linkeding}>
                <h1>{name}</h1>
               <p>{cargo}</p>
            </a>
        </div>
    )
}

export default Referen