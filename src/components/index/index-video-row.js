import React, { Component } from 'react';
import IndexVideo from './index-video';
import { CENTRAL_LIGHTGREEN_COLOR } from '../../utils/constants';
import HalfPageContent from './index-halfpage-content'

export default class IndexVideoRow extends Component {
  render() {
    console.log(this.props.videoDatas);
    return (
      <div css={{ 
          display: 'inline',
          textAlign:'left',
          width:'50%'}}>
        {this.props.videoDatas.map(video => (
          <div css={{ display: 'inline' }}>
            <IndexVideo videoData={video} />
          </div>
        ))}

        <HalfPageContent bodyListItems={'We build REAL relationships with each student'} title={'What We Do'}/>
      </div>
    );
  }
}
