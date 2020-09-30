import React from 'react';

import  {
    Card,
    CardGroup,
    Container
} from 'react-bootstrap';

import {
    Switch,
    Route,
    Link,
    withRouter,
  } from "react-router-dom";

import {
    blogInfos,
} from 'component/blog/Constants';

import BlogEntry from 'component/blog/Entry';

class BlogList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            match: this.props.match,
        };
    }

    render() {
        let match = this.props.match;
        return (
            <div>
            <Switch>
                <Route path={`${match.path}/:markdownFile`}>
                    <BlogEntry />
                </Route>
                <Route path={match.path}>
                <Container>
                    {
                        blogInfos.map((blog, index) => {
                            return (
                            <CardGroup key={index}>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Body>
                                        <Card.Title>{blog.title}</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">{new Date(blog.date).toDateString()}</Card.Subtitle>
                                        <Card.Text>{blog.summary}</Card.Text>
                                        <Link to={`${match.url}/${blog.filename}`}>Read More</Link>
                                    </Card.Body>
                                </Card>
                            </CardGroup>
                            );
                        })
                    }
                </Container>
                </Route>
            </Switch>
            </div>
        );
    }
}

export default withRouter(BlogList);