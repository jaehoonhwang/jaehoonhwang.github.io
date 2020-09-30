import React from 'react';

import {
    Container,
  } from 'react-bootstrap';  

import {
    SocialIcon
} from 'react-social-icons';

const iconColor = "#A9A9A9"

export default function Footer() {
    return (
        <Container>
            <div className="footer-icons">
                <SocialIcon url="https://github.com/jaehoonhwang" 
                    bgColor={iconColor}
                    className="footer-icon"/>
                <SocialIcon url="https://www.linkedin.com/in/jaehoon-hwang/" 
                    bgColor={iconColor}
                    className="footer-icon"/>
            </div>
        </Container>
    );
}