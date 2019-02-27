import React from 'react';
import YouTube from 'react-youtube';

export default props => {
  return (
    <YouTube
      css={Object.assign({}, props.style || {}, {
        width: '100%',
        maxWidth: '100%',
        margin: '0 auto',
      })}
      videoId={props.videoId}
      opts={{
        height: '390',
        width: '640',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 0,
        },
      }}
      onReady={function(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
      }}
    />
  );
};
