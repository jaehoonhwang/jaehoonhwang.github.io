import React from 'react';
import './App.scss';

import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

import {
  Container,
  Nav,
  Row,
  Col
} from 'react-bootstrap';  

import Header from 'component/Header';
import Footer from 'component/Footer';
import ScrollUp from 'component/ScrollUp';
import HomePage from 'component/home/Page';
import BlogPage from 'component/blog/Page';
import ProjectPage from 'component/project/Page';

const repo = ""
const homePage = repo + "/";
const blogPage = repo + "/blogs";
const projectPage = repo + "/projects";

const Navigation = (props) => {
  return (
    <Nav
    className="justify-content-center"
    variant="pills"
    activeKey={props.activePage}
    onSelect={(selectedKey) => props.onPageUpdate(selectedKey)}>
      <Nav.Item>
        <Nav.Link href={homePage}>Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href={blogPage}>Blog</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href={projectPage}>Projects</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      activePage: homePage,
    };

    this.onPageUpdate = this.onPageUpdate.bind(this);
  }
  
  render() {
    return (
        <Router>
        <Container fluid className="main_container">
          <Row>
            <Col>
            <Container className="header_container">
              <Header />
              <Navigation />
            </Container>
            </Col>
          </Row>
          <Row className="page_body">
            <Col>
              <Route path={blogPage}>
                <BlogPage />
              </Route>
              <Route path={projectPage}>
                <ProjectPage />
              </Route>
              <Route exact path={homePage}>
                <HomePage />
              </Route>
            </Col>
          </Row>
          <Row className="footer" style={{marginTop: "10em"}}>
            <Col>
              <ScrollUp/>
              <Footer/>
              <p>
                <b>Ah, things are ok </b><i>(things were not okay)</i>
              </p>
            </Col>
          </Row>
        </Container>
        </Router>
    )
  }

  onPageUpdate(selectedKey) {
    this.setState({activePage: selectedKey});
  }
}
