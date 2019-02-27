import React from 'react';
import Header from '../components/header';
import BasePage from './base-page';
import IndexVideoRow from '../components/index/index-video-row';
import { INDEX_VIDEO2, CENTRAL_LIGHTGREEN_COLOR, CENTRAL_GREEN_COLOR } from '../utils/constants';
import img from '../../assets/images/WhatWeDo.jpg';
import { Container } from 'reactstrap';
import img2 from '../../assets/images/WhatWeDo2.jpg';
import img3 from '../../assets/images/ACTPrep.jpg';
import ColumnItem from '../components/column-item';
import CustomYoutube from '../components/CustomYoutube';
import { Row, Col } from '../components';
import styled from 'styled-components';

const BodyText = styled.p`
  margin-top: 0.833rem;
  margin-bottom: 0.833rem;
`;

export default class WhoWeArePage extends BasePage {
  componentDidMount() {}

  renderPageContents() {
    return (
      <div>
        <Header>Who We Are</Header>
        <Container style={{ padding: 0 }}>
          <Row style={{ alignItems: 'center' }}>
            <Col>
              <CustomYoutube style={{ marginBottom: 8 }} videoId={'cOPp3KJEkyQ'} />
            </Col>
            <Col
              style={{
                display: 'flex',
                flexDirection: 'column',
              }}
              css={{
                '@media(max-width: 767px)': {
                  display: 'inline-block !important',
                },
              }}
            >
              <BodyText style={{ marginTop: 0}}>
                Alpha was founded with a simple idea: we believe that every kid deserves to succeed.
                As students at BYU in the September of 2016, we came to some important realizations.
              </BodyText>

              <BodyText>
                First, we recognized the opportunity gap that exists between secondary and higher
                education. Too many students fall by the wayside after high school because they
                don’t have the mentors or examples to guide and push them. They don’t have that
                opportunity.
              </BodyText>

              <BodyText style={{ marginBottom: 0}}>
                Second, we recognized that we did. Each of us could think of specific individuals
                who were instrumental in all of the hoop-jumping and stone-stepping necessary to get
                to college.
              </BodyText>
            </Col>
          </Row>
          <BodyText>Third, we wanted to do something about it. </BodyText>

          <BodyText>
            So, we started ALPHA. Within months we had developed a curriculum and filed as a
            non-profit organization. By not only providing high school students with mentors and
            examples, but mentors and examples who provide an ACT prep course, financial aid
            research, and college application advisement, we’re able to shorten the gap and help
            students get to college who otherwise would not.{' '}
          </BodyText>

          <BodyText>
            We believe that everyone has the right to higher education. At ALPHA, we are working to
            give everyone that opportunity, one student at a time.{' '}
          </BodyText>

          <div
            css={{
              backgroundColor: CENTRAL_GREEN_COLOR,
              '@media(max-width: 767px)': {
                margin: "0 -16px",
              },
            }}
          >
            <h3 css={{ color: 'white', textAlign: 'center', width: '100%', margin: 0, padding: '24px 0' }}>
              What We Do
            </h3>
            <ColumnItem
              bodyImage={img3}
              title="ACT Prep Class"
              bodyText={
                'We host a low-cost, highly effective 8-week ACT preparation course that provides a practice book, a study schedule, and group practice sessions to each individual student.'
              }
            />
            <ColumnItem
              bodyImage={img2}
              title="College Applications"
              bodyText={
                'We help the students with the challenging process of applying to college. WE have been in their shoes and we know that the process is much easier when there is someone to help.'
              }
            />
          </div>

          <h3 css={{ textAlign: 'center', width: '100%', margin: 0, padding: '24px 0' }}>
            Interested in Being a Mentor?
          </h3>
          <Row style={{ alignItems: 'center', marginBottom: 24 }}>
            <Col>
              <img css={{ maxWidth: '100%' }} src={img} />
            </Col>
            <Col
              style={{
                display: 'flex',
                flexDirection: 'column',
              }}
              css={{
                '@media(max-width: 767px)': {
                  display: 'inline-block !important',
                },
              }}
            >
              <BodyText style={{ marginTop: 0}}>
                In order to deliver our services to local high school students we need the help of
                enthusiastic, committed mentors and leaders who want to pay it forward to the next
                generation of students.
              </BodyText>
              <BodyText>
                Interested in working directly with students in a classroom setting? As a mentor,
                you will have a direct impact on high school students by helping them prepare for
                and apply to colleges.
              </BodyText>

              <BodyText style={{ marginBottom: 0}}>
                Please email us at alpha.mentoringut@gmail.com to learn more about mentoring
                opportunities and how to get involved.
              </BodyText>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
