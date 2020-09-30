import React from 'react';

import background from 'background.svg';

import {
    Container,
  } from 'react-bootstrap';  


export default function HomePage() {
    return (
        <Container fluid 
            className="homepage"
            style ={{padding: 0, margin: 0, width: "100%"}}
        >
            <img className="background" src={background}/>
            <p>
                a night owl joshing around with computers and things
            </p>
        </Container>
    );
}