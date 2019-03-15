import React, { Component } from 'react';
import { PORTAL_TABS } from '../../utils/constants';
import PortalTopTabs from './portal-top-tabs';
import PortalTabContent from './portal-tab-content';

export default class PortalContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 1,
    };
  }

  render() {
    let tab = PORTAL_TABS[this.state.selectedTab];
    return (
      <div>
        <PortalTopTabs selectedTab={this.state.selectedTab} onClick={selectedTab => this.setState({ selectedTab })} />
        <PortalTabContent tab={tab} />
      </div>
    );
  }
}
