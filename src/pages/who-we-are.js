import React from 'react';
import Header from '../components/header';
import BasePage from '../components/base-page';
import IndexVideoRow from '../components/index/index-video-row';
import { INDEX_VIDEO2 } from '../utils/constants';
import {Container} from 'reactstrap';

export default class WhoWeArePage extends BasePage {
  componentDidMount() {}

  renderPageContents() {
    return (
      <div>
          <Header>Who We Are</Header>
          <IndexVideoRow videoDatas={INDEX_VIDEO2} css={{ marginRight:'auto', marginLeft: 'auto'}}/>
          <container>
            <p css={{paddingLeft:'30px', width: '50%', float:'right'}}>Alpha was founded with a simple idea: we believe that every kid deserves to succeed. 
              As students at BYU in the September of 2016, we came to some important realizations.</p>

            <p css={{paddingLeft:'30px', width: '50%', float:'right'}}>First, we recognized the opportunity gap that exists between secondary and higher education. 
              Too many students fall by the wayside after high school because they don’t have the mentors or 
              examples to guide and push them. They don’t have that opportunity.</p>

            <p css={{paddingLeft:'30px', width: '50%', float:'right'}}>Second, we recognized that we did. Each of us could think of specific individuals
              who were instrumental in all of the hoop-jumping and stone-stepping necessary to get to college. </p>

            <p css={{ width: '100%', float:'right'}}>Third, we wanted to do something about it. </p>

            <p css={{ width: '100%', float:'right'}}>So, we started ALPHA. Within months we had developed a curriculum and filed as a non-profit 
              organization. By not only providing high school students with mentors and examples, but mentors and 
              examples who provide an ACT prep course, financial aid research, and college application advisement, 
              we’re able to shorten the gap and help students get to college who otherwise would not. </p>

            <p css={{ width: '100%', float:'right'}}>We believe that everyone has the right to higher education. At ALPHA, we are working to give everyone 
              that opportunity, one student at a time. </p>
            
            <h4 css={{textAlign: "center", width:'100%', float: 'right'}}>Interested in Being a Mentor?</h4>
            <p css={{width:'100%',  float: 'right'}}>
            In order to deliver our services to local high school students we need the help of enthusiastic, 
            committed mentors and leaders who want to pay it forward to the next generation of students.
            </p>
            <p css={{width:'100%',  float: 'right'}}>Interested in working directly with students in a classroom setting? As a mentor, you will have a 
              direct impact on high school students by helping them prepare for and apply to colleges.</p>
          </container>
{/* 
        <Container css={{
          "width": "50%",
          "textAlign": "center",
        }}>
        <h4>Donate</h4>
          <p>While you may not be able to sacrifice your time, your contributions can still make a difference. 
            Alpha is a registered 501 (c)(3) nonprofit solely reliant on private donors. Your contributions make a 
            difference in a number of ways:</p>
            <ol>
              <li>College Application Fees</li>
              <li>ACT Prep Materials and Fees</li>
              <li>Scholarships</li>
              <li>Leadership Costs</li>
            </ol>
        <GreenButton to= 'https://www.paypal.com/donate/?token=lpxLoY4Qi1Xk6PF846n-lul3ZEzGZWDIt0vH4bkuGOW2GymcPEIt-iypJIDIvsprHteX3m&country.x=US&locale.x=US'></GreenButton>
        </Container> */}
      </div>
    );
  }
}
