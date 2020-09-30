import React from 'react';

import {
    withRouter
} from 'react-router-dom';

import BlogList from 'component/blog/List';

class BlogPage extends React.Component {

    render() {
        return (
            <BlogList />
        );
    }
}

export default withRouter(BlogPage);