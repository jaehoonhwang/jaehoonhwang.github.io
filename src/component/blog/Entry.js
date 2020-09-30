import React from 'react';
import 'component/blog/blog.css';

import {
    Container,
    Row,
    Col
  } from 'react-bootstrap';  

import ReactMarkdown from 'react-markdown';

import {
    withRouter
} from 'react-router-dom';

import {
    Clock,
    Pen,
    Tags,
} from 'react-bootstrap-icons';

import CodeBlock from 'component/blog/CodeBlock';
import {
    blogInfos,
} from 'component/blog/Constants';



class BlogEntry extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            filename: props.match.params.markdownFile,
            markdown: "",
            metadata: "",
        };
    }

    async componentDidMount() {
        // Ya gotta specify the path or else it won't know where the path is coming from.
        // https://github.com/webpack/webpack/issues/6680
        // You need this because apparently "this" doesn't come into scope for metadata
        let filename = this.state.filename;

        let metadata = blogInfos.filter( function (e) {
            return e.filename === filename;
        });

        let text = await import('blog/' + filename)
            .then(file => fetch(file.default))
            .then(response => response.text())
            .catch(err => console.log(err));

        if (text !== undefined) {
            this.setState({markdown: text});
        }

        this.setState({metadata: metadata[0]});
    }

    render() {
        let markdown = this.state.markdown === "" ? (<div/>) : 
            <ReactMarkdown 
                source={this.state.markdown} 
                renderers={{ code: CodeBlock }}/>
        let timestamp = new Date(this.state.metadata.date).toDateString();
        let summary = this.state.metadata.summary;
        return (
            <Container fluid>
                <Row>
                    <Col>
                    <Container>
                    <ul className="entry_title_box">
                        <li>
                            <h1>{this.state.metadata.title}</h1>
                        </li>
                        <li>
                            <div>
                                <Clock/>
                                <i className="entry_timestamp">{timestamp}</i>
                            </div>
                        </li>
                        <li>
                            <div>
                                <Pen/>
                                <i className="entry_timestamp">{summary}</i>
                            </div>
                        </li>
                        <li>
                        <div>
                            <Tags/>
                        </div>
                        </li>
                    </ul>
                    </Container>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <Container>
                        {markdown}
                    </Container>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default withRouter(BlogEntry);