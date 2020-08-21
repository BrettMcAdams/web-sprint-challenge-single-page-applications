import React from 'react'
import styled from 'styled-components'

const StyledConfirmation = styled.div`
    height: 100vh;
    background-image: url("https://images.getbento.com/accounts/218d4ffbb37dd2996ba53d258951a956/media/UFHsFlMmR8e6NSVYKlMw_ClassicCombo.jpg?fit=max&w=1800&auto=format,compress");
    h2 {
        margin: 0 auto;
        text-align: center;
        padding-top: 30vh;
        font-size: 3rem;
        color: white;
    }    
`

export default function Confirmation() {
    return(
        <StyledConfirmation>
            <h2>Congrats! Pizza is on its way!</h2>
        </StyledConfirmation>
    )
}