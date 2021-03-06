import React from 'react';
import BasePage from './base-page';
import Header from '../components/header';
import { INDEX_VIDEO1, DONATE_LINK } from '../utils/constants';
import IndexVideoRow from '../components/index/index-video-row';
import ColumnItem from '../components/column-item';
import HalfPageContent from '../components/index/index-halfpage-content';
import JumboTron from '../components/jumbotron';
import GreenButton from '../components/greenbutton';
import { Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import container from '../components/container';

export default class HomePage extends BasePage {
  componentDidMount() {}

  renderPageContents() {
    return (
      <div>
        <JumboTron />
        <HalfPageContent buttonRef={DONATE_LINK} />
        {/*         
        
        <Row title = 'Donate' content = 'While you may not be able to sacrifice your time, your contributions can still make a difference. 
            Alpha is a registered 501 (c)(3) nonprofit solely reliant on private donors. Your contributions make a 
            difference in a number of ways:'/>
        <container css={{
          width: '100%',
          float: 'left',
          textAlign: 'left',
          '@media(max-width: 768px)': {
            float: 'none',
            width: 'auto'
          }
        }}>
            <ol>
              <li>College Application Fees</li>
              <li>ACT Prep Materials and Fees</li>
              <li>Scholarships</li>
              <li>Leadership Costs</li>
            </ol> */}

        {/* </container> */}
      </div>
    );
  }
}
