import React from 'react';

import {
    Container,
} from 'react-bootstrap';

import ProjectList from 'component/project/List';

export default function ProjectPage(props) {
    return (
        <Container>
            <ProjectList />
        </Container>
    );
}