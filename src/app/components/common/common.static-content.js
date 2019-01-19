import React, { Component } from 'react';

 class CommonStaticContent extends Component{
   
render(){
const {pageContent} = this.props;
    return(
        <div dangerouslySetInnerHTML={{ __html: pageContent }} />
    )
}
}

export default CommonStaticContent;