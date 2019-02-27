import React, { Component } from 'react';
import CustomYoutube from '../CustomYoutube';

export default class TrainingVideo extends Component {
  render() {

    return (
      <div>
        <h4>{this.props.videoData.title}</h4>
        <CustomYoutube videoId={this.props.videoData.id} />
      </div>
    );
  }
}
