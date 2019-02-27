import React, { Component } from 'react';
import YouTube from 'react-youtube';

export default class IndexVideo extends Component {
  render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
      },
    };

    return (
      <div css={{ textAlign: 'center' }}>
        <h4
          css={{
            textAlign: 'center',
          }}
        >
          {this.props.videoData.title}
        </h4>
        <YouTube
          css={{ maxWidth: '100%' }}
          videoId={this.props.videoData.id}
          opts={opts}
          onReady={this._onReady}
        />
      </div>
    );
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}
