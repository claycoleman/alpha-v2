import React, { Component } from 'react';
import {
  PORTAL_TABS,
  CENTRAL_GREEN_COLOR,
  CENTRAL_DARKGREEN_COLOR,
  CENTRAL_LIGHTGREEN_COLOR,
} from '../../utils/constants';

export default class PortalTopTabs extends Component {
  render() {
    return (
      <div
        css={{
          textAlign: 'right',
          '@media(max-width: 767px)': {
            textAlign: 'center',
          },
        }}
      >
        {PORTAL_TABS.map((tabData, index) => (
          <div
            css={[
              {
                display: 'inline-block',
                fontFamily: '"Avenir Next", sans-serif',
                padding: '4px 8px',
                margin: '0 2px',
                borderTopLeftRadius: '4px',
                borderTopRightRadius: '4px',
                textAlign: 'center',
                userSelect: 'none',
                cursor: 'pointer',
                border: '1px solid gray',
                borderColor: CENTRAL_GREEN_COLOR,
                borderBottomColor: 'transparent !important',

                transition: 'all 200ms cubic-bezier(0.4,0,0.2,1)',
                transitionProperty: 'color, background-color, border-color',

                '@media(max-width: 767px)': {
                  fontSize: '14px',
                  minWidth: '72px',
                },
              },
              this.props.selectedTab === index
                ? {
                    backgroundColor: 'white',
                    color: CENTRAL_GREEN_COLOR,
                    ':hover': {
                      backgroundColor: 'white',
                      color: CENTRAL_LIGHTGREEN_COLOR,
                      borderColor: CENTRAL_LIGHTGREEN_COLOR,
                    },
                  }
                : {
                    color: 'white',
                    backgroundColor: CENTRAL_GREEN_COLOR,
                    ':hover': {
                      color: 'white',
                      backgroundColor: CENTRAL_LIGHTGREEN_COLOR,
                      borderColor: CENTRAL_LIGHTGREEN_COLOR,
                    },
                  },
            ]}
            onClick={() => this.props.onClick(index)}
          >
            {tabData.title}
          </div>
        ))}
      </div>
    );
  }
}
