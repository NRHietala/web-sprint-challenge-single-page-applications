import React from 'react'
import styled from 'styled-components';


function Success(props) {
  const { printout } = props;

  const StyledSuccess = styled.div `
    display:flex;
    flex-flow: column nowrap;
    align-items:center;
  `
  return (
    <StyledSuccess>
      {printout.name && printout.name ? <h2>Pizza for: {printout.name}</h2>: null}
      {printout.size && printout.size ? <h2>Size: {printout.size}</h2>: null}
      {printout.cheese && printout.cheese ? <h3>Cheese</h3>: null}
      {printout.ham && printout.ham ? <h3>Ham</h3>: null}
      {printout.pineapple && printout.pineapple ? <h3>Pineapple</h3> : null}
      {printout.chicken && printout.chicken ? <h3>Chicken</h3>:null}
    </StyledSuccess>
  )
}

export default Success
