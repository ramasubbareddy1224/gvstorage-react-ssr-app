import React, { Component } from 'react';
import Page from '../../components/page';

class NotFound extends Component {
  constructor(){
    super();
    this.state ={
      isPageLoaded: false
    }
  }
  componentDidMount() {
    this.setState({isPageLoaded: true});
  }

  

  render() {
   
    return (
      <Page
    id="not-found"
    title="Not Found"
    description="Page not found"
    noCrawl
  >
  {this.state.isPageLoaded &&
      (!!window) && (
        window.document.getElementById('div-preloader').style.display = 'none'
      )
   
  }
    <p>Page Not Found</p>
  </Page>
    );
  }
}


export default NotFound;
