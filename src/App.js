import React, { Component } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import SkipNav from 'react-skip-nav';
import Nav from './components/Nav';
import Header from './components/Header';
import Layout from './layouts/Layout';
import Briefs from './components/Briefs';
import About from './components/About';
import Footer from './components/Footer';

import briefData from './data/briefdata.json';
import 'bootstrap/dist/css/bootstrap.css';
import './font-awesome/css/font-awesome.min.css';
import "react-skip-nav/lib/style.css";
import './GDS.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      briefData: briefData,
      currentBrief: briefData.briefs[0]
    };
    this.getNewBrief = this.getNewBrief.bind(this);
  }

  getNewBrief() {
    const numBriefs = this.state.briefData.briefs.length;
    let randomBriefIndex = Math.floor(Math.random() * (numBriefs - 1)) + 0;
    console.log(this.state.briefData.briefs[randomBriefIndex])
    this.setState({
      currentBrief: this.state.briefData.briefs[randomBriefIndex]
    });
  }

  componentDidMount() {
    this.getNewBrief();
  }

  render() {
    return (
      <Router>
        <SkipNav
         id='skip-nav'
         text='skip to main content'
         targetDomId='main-content'/>
        <Nav />
        <Header />
        <Layout>
          <Switch>
            <Route exact path="/" render={(props) =>
              <Briefs {...props}
                brief={this.state.currentBrief}
                getNewBrief={this.getNewBrief} />
            } />
            <Route exact path='/about' component={About} />
            <Route render={() => {
							return <p>Not Found</p>
						}}/>
          </Switch>
        </Layout>
        <Footer />
      </Router>
    );
  }
}

export default App;
