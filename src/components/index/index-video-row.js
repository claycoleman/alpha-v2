import React, { Component } from 'react';
import IndexVideo from './index-video';
import { CENTRAL_LIGHTGREEN_COLOR } from '../../utils/constants';

export default class IndexVideoRow extends Component {
  render() {
    console.log(this.props.videoDatas);
    return (
      <div css={{ 
          display: 'inline',
          float:'left',
          width:'50%',
          '@media(max-width: 768px)': {
            float: 'none',
            width: 'auto'
          }}}>
        {this.props.videoDatas.map(video => (
          <div css={{ display: 'inline' }}>
            <IndexVideo videoData={video} />
          </div>
        ))}
      </div>
    );
  }
}
