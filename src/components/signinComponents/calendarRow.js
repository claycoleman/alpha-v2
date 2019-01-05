import React, { Component } from 'react';
import Calendar from './calendar.js';

export default class CalendarRow extends Component {
  render() {
    return (
      <div css={{ display: 'inline'}}>
            <Calendar/>
      </div>
 
    );  
  }
}
