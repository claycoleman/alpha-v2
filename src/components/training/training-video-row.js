import React, { Component } from 'react';
import TrainingVideo from './training-video';

export default class TrainingVideoRow extends Component {
  render() {
    console.log(this.props.videoDatas);
    return (
      <div css={{ display: 'inline' }}>
        {this.props.videoDatas.map(video => (
          <div css={{ display: 'inline' }}>
            <TrainingVideo videoData={video} />
          </div>
        ))}
      </div>
    );
  }
}
