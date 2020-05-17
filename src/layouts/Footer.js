import React from 'react'

import {Container} from 'reactstrap'


const Footer = () => {
    return(
        <Container fluid tag="Footer" className="bg-info text-white fixed-bottom text-center p-3 text-uppercase">
        <p>Github Account Fetcher App with Firebase </p>
        <p>Developed by Mangaldeep Das</p>
        </Container>
    )
}

export default Footer