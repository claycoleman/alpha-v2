import React, { Component } from 'react';
import {
  PORTAL_TABS,
  CENTRAL_GREEN_COLOR,
  CENTRAL_DARKGREEN_COLOR,
  CENTRAL_LIGHTGREEN_COLOR,
} from '../../utils/constants';

import CustomYoutube from '../CustomYoutube';

export default class PortalTabContent extends Component {
  render() {
    const { tab } = this.props;
    const extraLinks = tab.extraLinks.map((linkData, index) => (
      <a
        target="_blank"
        css={[
          {
            display: 'block',
            fontFamily: '"Avenir Next", sans-serif',
            padding: '.375rem .75rem',
            margin: '8px 0',
            minWidth: '100px',
            borderRadius: '4px',
            textAlign: 'center',
            userSelect: 'none',
            cursor: 'pointer',
            border: '1px solid gray',
            borderColor: CENTRAL_GREEN_COLOR,
            textDecoration: 'none',
            transition: 'all 200ms cubic-bezier(0.4,0,0.2,1)',
            transitionProperty: 'color, background-color, border-color',
          },
          {
            color: 'white',
            backgroundColor: CENTRAL_GREEN_COLOR,
            ':hover': {
              color: 'white',
              backgroundColor: CENTRAL_LIGHTGREEN_COLOR,
              borderColor: CENTRAL_LIGHTGREEN_COLOR,
              textDecoration: 'none',
            },
          },
        ]}
        href={linkData.link}
      >
        {linkData.title}
      </a>
    ));
    return (
      <div
        className="row"
        style={{
          padding: 16,
          border: '3px solid gray',
          borderColor: CENTRAL_GREEN_COLOR,
          borderRadius: 4,
          marginBottom: 16,
        }}
      >
        <div
          css={{
            '@media(max-width: 767px)': {
              display: 'none !important',
            },
          }}
          className="col-md-4"
        >
          <h3 css={{ textAlign: 'center' }}>Other Study Links</h3>
          <div
            style={{
              padding: 16,
              border: '2px solid gray',
              borderColor: CENTRAL_GREEN_COLOR,
              borderRadius: 4,
              maxHeight: '500px',
              overflowY: 'scroll',
              '-webkit-overflow-scrolling': 'touch',
            }}
          >
            {extraLinks}
          </div>
        </div>
        <div className="col-md-8">
          <h2 style={{ textAlign: 'center', marginBottom: 4 }}>{tab.title} Training</h2>
          <CustomYoutube videoId={tab.mainYoutubeLink} />
          <div className="row">
            <div className="col-md-6">
              <h4 style={{ marginTop: 8, marginBottom: 4 }}>Homework</h4>
              <p>Complete TIMED {tab.title} section from practice test in the back of the book</p>
            </div>
            <div className="col-md-6">
              <h4 style={{ marginTop: 8, marginBottom: 4 }}>Extra Credit</h4>
              <p>{tab.extraCreditText}</p>
            </div>
          </div>
        </div>
        <div
          css={{
            display: 'none !important',
            '@media(max-width: 767px)': {
              display: 'block !important',
            },
          }}
          className="col-md-4"
        >
          <h3 css={{ textAlign: 'center' }}>Other Study Links</h3>
          {extraLinks}
        </div>
      </div>
    );
  }
}
