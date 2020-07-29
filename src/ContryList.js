import React from 'react'

function ContryList({name,totalCases}) {
 
    return (
        <div className="countrylts">
           <div> {name}</div>
           <div>{totalCases}</div>
        </div>
    )
}

export default ContryList
