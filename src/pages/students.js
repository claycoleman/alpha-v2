import React from 'react';
import Header from '../components/header';
import Block from '../components/block'
import { navigate } from 'gatsby';
import BasePage from '../components/base-page';
import { isAuthenticatedStudent } from '../utils/auth';
import TrainingVideoRow from '../components/training/training-video-row';
import CalendarRow from '../components/signinComponents/calendarRow';
import Calendar from '../components/signinComponents/calendar';
import { STUDENT_VIDEOS } from '../utils/constants';
import iFrame from 'react-iframe'

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
        {/* <IFrame url="http://www.youtube.com/embed/xDMP3i36naA"
            position="absolute"
            width="100%"
            id="myId"
            className="myClassname"
            height="100%"
            styles={{height: "25px"}}
            allowFullScreen/>
        <iFrame url="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=hoiching.tong22%40gmail.com&amp;color=%231B887A&amp;ctz=America%2FDenver" style={"border-width:0"} width="800" height="600" frameborder="0" scrolling="no" title="Calendar"/> */}
      </div>
    );
  }
}
