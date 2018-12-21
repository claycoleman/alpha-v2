import React from 'react';
import BasePage from '../components/base-page';
import Header from '../components/header';
import { INDEX_VIDEO1 } from '../utils/constants';
import { INDEX_VIDEO2 } from '../utils/constants';
import IndexVideoRow from '../components/index/index-video-row';
import ColumnItem from '../components/column-item';
import HalfPageContent from '../components/index/index-halfpage-content';
import JumboTron from '../components/jumbotron';
import 'bootstrap/dist/css/bootstrap.min.css';


export default class HomePage extends BasePage {
  componentDidMount() {}

  renderPageContents() {
    return (
      <div>
        {/* <Header>We are Alpha</Header> */}
        <JumboTron></JumboTron>
        <IndexVideoRow videoDatas={INDEX_VIDEO1} />
        <HalfPageContent bodyListItems={'We build REAL relationships with each student'} title={'What We Do'}/>
        {/* <ColumnItem bodyImage="../image.jpg" bodyText={'This is our body text'} title="First Column Item" moreLink="/" />
        <ColumnItem bodyImage="../image.jpg" bodyText={'This is our body text'} title="Second Column Item" moreLink="/" />
        <ColumnItem bodyImage="../image.jpg" bodyText={'This is our body text'} title="Third Column Item" moreLink="/" />
        <ColumnItem bodyImage="../image.jpg" bodyText={'This is our body text'} title="Four Column Item" moreLink="/" /> */}
        <h4
          css={{
           width: "100%",
          float: "left",
          textAlign: "center",
          '@media(max-width: 768px)': {
              float: 'none',
              width: 'auto'
            }
          }}
        >
          Changing this
        </h4>
        <p
          css={{
            width: "100%",
            float: "left",
            '@media(max-width: 768px)': {
              float: 'none',
              width: 'auto'
            }
          }}>
          Here we can include anything that we feel like including. Follow the design from the existing website to build something really nice? The first thing
          that we need to do is discuss what the homepage would look like, then componentize it.
        </p>
      </div>
    );
  }
}
