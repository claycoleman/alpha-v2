import React from 'react';
import BasePage from '../components/base-page';
import Header from '../components/header';
import { INDEX_VIDEO1 } from '../utils/constants';
import IndexVideoRow from '../components/index/index-video-row';
import ColumnItem from '../components/column-item';
import HalfPageContent from '../components/index/index-halfpage-content';
import JumboTron from '../components/jumbotron';
import GreenButton from '../components/greenbutton';
import {Container} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import container from '../components/container';
import Row from '../components/row';


export default class HomePage extends BasePage {
  componentDidMount() {}

  renderPageContents() {
    return (
      <div>
        {/* <Header>We are Alpha</Header> */}
        
        <JumboTron></JumboTron>
        <IndexVideoRow videoDatas={INDEX_VIDEO1} />
        <HalfPageContent bodyContent = {'While you may not be able to sacrifice your time, your contributions can still make a difference. Alpha is a registered 501 (c)(3) nonprofit solely reliant on private donors. Your contributions make a difference in a number of ways:'} 
        bodyListItem1={'College Application Fees' } bodyListItem2={'ACT Prep Materials and Fees'} 
        bodyListItem3={'Scholarships'} bodyListItem4={'Leadership Costs'} title={'Donate'}
        buttonTitle ={'Donate Now'} buttonRef = {'https://www.paypal.com/donate/?token=lpxLoY4Qi1Xk6PF846n-lul3ZEzGZWDIt0vH4bkuGOW2GymcPEIt-iypJIDIvsprHteX3m&country.x=US&locale.x=US'}/>
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
