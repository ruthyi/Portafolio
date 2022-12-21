import React from 'react'

export const Project = (props) => {
    const {lista:{id, name, url, description, github}}=props;
    console.log(props);
     // console.log(name)
     return (
         <div className="card bg-dark div-project  p-5 d-flex justify-content-center align-self-center ">
            <div className='img-card'>
            <img src={url} className="card-img-top" alt={name}></img> 
            </div>
                  <div className="card-body row text-card d-flex justify-content-end">
                     <h1 className='card-title col-12'>{name}</h1>
                     <p className="card-text col-12">{description}</p>
                     <a href={github} className="card-link col-12">Ver Mas</a>
                 </div>
         </div>
     )
}
