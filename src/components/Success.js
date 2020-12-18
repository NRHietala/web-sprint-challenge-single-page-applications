import React from 'react'

function Success(props) {
  const { printout } = props;
  return (
    <div>
      Success!
      {printout.name && printout.name ? <h2>Pizza for: {printout.name}</h2>: null}
      {printout.size && printout.size ? <h2>Size: {printout.size}</h2>: null}
      {printout.cheese && printout.cheese ? <h3>Cheese</h3>: null}
      {printout.ham && printout.ham ? <h3>Ham</h3>: null}
      {printout.pineapple && printout.pineapple ? <h3>Pineapple</h3> : null}
      {printout.chicken && printout.chicken ? <h3>Chicken</h3>:null}
    </div>
  )
}

export default Success
