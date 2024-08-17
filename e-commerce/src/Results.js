import React from 'react'

function Results(data) {

  return (
       <div>
      <p>{data.map(item => <div key={item.productName}>
        <p>Name : {item.productName} age : {item.price} </p>
      </div>)}</p>
    </div>
  )
}

export default Results
