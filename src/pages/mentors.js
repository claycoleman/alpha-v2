import React from 'react';
import Header from '../components/header';
import { navigate } from 'gatsby';
import BasePage from './base-page';
import { isAuthenticatedMentor } from '../utils/auth';
import TrainingVideoRow from '../components/training/training-video-row';
import { MENTOR_VIDEOS } from '../utils/constants';
import { Link } from 'gatsby';

export default class MentorsPage extends BasePage {
  componentWillMount() {
    if (!isAuthenticatedMentor()) {
      navigate('/login/');
    }
  }

  renderPageContents() {
    return (
      <div>
        <Header>Mentors</Header>
        <p>Here we will display all the training videos and other materials as necessary.</p>
        <TrainingVideoRow videoDatas={MENTOR_VIDEOS} />
        <Link to="/mentors/trainings">Trainings</Link>
      </div>
    );
  }
}
