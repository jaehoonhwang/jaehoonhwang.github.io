import React from 'react';
import './App.scss';

import {
  HashRouter as Router,
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

const repo = "/";
const homePage = repo + "";
const blogPage = repo + "blogs";
const projectPage = repo + "projects";
const hash = "/#/"
const hashHomePage = hash + "";
const hashBlogPage = hash + "blogs";
const hashProjectPage = hash + "projects";

const Navigation = (props) => {
  return (
    <Nav
    defaultActiveKey={hashHomePage}
    className="justify-content-center"
    variant="tabs"
    activeKey={props.activePage}
    onSelect={(selectedKey) => props.onPageUpdate(selectedKey)}>
      <Nav.Item>
        <Nav.Link href={hashHomePage}>Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href={hashBlogPage}>Blog</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href={hashProjectPage}>Projects</Nav.Link>
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
        <Router basename="/">
        <Container fluid className="main_container">
          <Row>
            <Col>
            <Container className="header_container">
              <Header />
              <Navigation onPageUpdate={this.onPageUpdate}/>
            </Container>
            </Col>
          </Row>
          <Row className="page_body">
            <Col>
              <Route exact path={homePage}>
                <HomePage />
              </Route>
              <Route path={blogPage}>
                <BlogPage />
              </Route>
              <Route path={projectPage}>
                <ProjectPage />
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
