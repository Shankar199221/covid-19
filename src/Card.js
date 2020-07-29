import React from 'react'

function Card({name,recovered,flagCountry,deaths,actve}) {
    
    return (
        <div className="card">
            <div className="card__left">
                <img className="card__left__img" src={flagCountry} alt="flag" width="120rem" height="110rem" />
                <h1 className="card__left__h1">{name}</h1>
            </div>
            <div className="card__right">
                <h4>Active Cases: {actve}</h4>
                <h4>Deaths : {deaths}</h4>
                <h5>Recieved: {recovered}</h5>
            </div>
         
          
        </div>
    )
}

export default Card
