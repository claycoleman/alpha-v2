import React from 'react';
import Header from '../components/header';
import { navigate } from 'gatsby';
import BasePage from './base-page';
import { isAuthenticatedMentor, isAuthenticatedUser } from '../utils/auth';
import TrainingVideoRow from '../components/training/training-video-row';
import { MENTOR_VIDEOS } from '../utils/constants';
import { Link } from 'gatsby';
import PortalContainer from '../components/training/portal-container';

export default class MentorsPage extends BasePage {
  componentDidMount() {
    if (!isAuthenticatedUser()) {
      navigate('/login/');
    }
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
