import React from 'react';

import  {
    Card,
    CardGroup,
    Container,
} from 'react-bootstrap';

import CodeTags from 'component/project/CodeTags';

import {
    projectInfos,
} from 'component/project/Constants';

export default function ProjectList(props) {

    return (
        <div>
            <Container>
                {
                    projectInfos.map((project, index) => {
                    console.log(project)
                        return (
                        <CardGroup key={index}>
                            <Card style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title>{project.title}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">{new Date(project.date).toDateString()}</Card.Subtitle>
                                    <Card.Text>{project.summary}</Card.Text>
                                    <CodeTags codes={project.languages}/>
                                    <Card.Link href={project.link}>Project Link</Card.Link>
                                </Card.Body>
                            </Card>
                        </CardGroup>
                        );
                    })
                }
            </Container>
        </div>
    );
}