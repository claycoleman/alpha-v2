import React from 'react';
import Header from '../components/header';
import { navigate } from 'gatsby';
import BasePage from './base-page';
import { isAuthenticatedMentor, isAuthenticatedUser } from '../utils/auth';
import TrainingVideoRow from '../components/training/training-video-row';
import { MENTOR_VIDEOS } from '../utils/constants';
import { Link } from 'gatsby';
import PortalContainer from '../components/training/portal-container';

export default class PortalPage extends BasePage {
  componentDidMount() {
    if (!isAuthenticatedUser()) {
      navigate('/login/');
    }
  }

  // hacky but allows us to style the portal navbar link well
  renderBodyClass() {
    return 'portal-body';
  }

  renderPageContents() {
    return (
      <div>
        <Header>Materials Portal</Header>
        <PortalContainer />
      </div>
    );
  }
}
