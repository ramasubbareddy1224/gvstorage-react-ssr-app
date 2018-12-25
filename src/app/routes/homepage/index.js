import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { frontloadConnect } from 'react-frontload';
import Page from '../../components/page';

import {
getDiscounts
} from '../../../modules/actioncreators/home.actioncreator';


const frontload = async props =>
  await props.getDiscounts();

class HomePage extends Component {

  render() {
    const {allDiscounts} = this.props;

    return (
      <Page
        id="profile"
        title="Home Page"
        description={`This is user profile number #`}

      >
        <p>
          <b>Grocer:</b> {allDiscounts.Grocer}
        </p>
        <p>
          <b>Gourmet:</b> {allDiscounts.Gourmet}
        </p>
      </Page>
    );
  }
}

const mapStateToProps = state => ({
  allDiscounts: state.discountData.data
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getDiscounts }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  frontloadConnect(frontload, {
    onMount: true,
    onUpdate: false
  })(HomePage)
);
