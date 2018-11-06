import React from 'react';
import Header from '../components/header';
import { navigate } from 'gatsby';
import BasePage from '../components/base-page';
import { isAuthenticatedStudent } from '../utils/auth';
import TrainingVideoRow from '../components/training/training-video-row';
import { STUDENT_VIDEOS } from '../utils/constants';

export default class StudentsPage extends BasePage {
  componentWillMount() {
    if (!isAuthenticatedStudent()) {
      navigate('/login/');
    }
  }

  renderPageContents() {
    return (
      <div>
        <Header>Students</Header>
        <p>Here we will display all the training videos and other materials as necessary.</p>
        <TrainingVideoRow videoDatas={STUDENT_VIDEOS} />
      </div>
    );
  }
}
