import React, { Component } from 'react';
import YouTube from 'react-youtube';
import CustomYoutube from '../CustomYoutube';

export default class IndexVideo extends Component {
  render() {

    return (
      <div css={{ textAlign: 'center' }}>
        <h4
          css={{
            textAlign: 'center',
          }}
        >
          {this.props.videoData.title}
        </h4>
        <CustomYoutube
          videoId={this.props.videoData.id}
        />
      </div>
    );
  }
}
