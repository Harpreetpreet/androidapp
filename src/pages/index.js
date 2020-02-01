/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import styled from 'styled-components';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import About from '../components/About';
import Screenshot from '../components/Screenshot';
import Cardcontent from '../components/Cardcontent';
import Feature from '../components/Feature';
import Featurecontent from '../components/Featurecontent';

const Section = styled.div`
  text-align: center;
  background-image: url('../images/top-bg.jpg');
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  .container {
    padding-top: 8rem;
  }
  h1 {
    color: ${props => props.theme.mainBrandColor} !important;
  }
  .icon1 {
    content: '\f30d';
    color: #38569c;
  }
  .icon2 {
    content: '\f30a';
    color: #30c5ea;
  }
  .icon3 {
    content: '\f310';
    color: #db4a37;
  }
  .icon4 {
    content: '\e807';
    color: #ff4e7e;
  }
  .container {
    margin-bottom: 1rem;
  }
`;

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Seo title="Home" description="Welcome to GatsbyJs v1" />
        <Section className="section">
          <div className="container is-size-1">
            <img src="../images/rr_head_banner.png" />

            <ul className="icon">
              <li className="icon1">
                <a
                  href="https://www.facebook.com/resurrectionremixrom"
                  target="_blank">
                  <i className="fab fa-facebook-f" />
                </a>
              </li>
              <li className="icon2">
                <a
                  href="https://www.facebook.com/resurrectionremixrom"
                  // eslint-disable-next-line react/jsx-no-target-blank
                  target="_blank">
                  <i className="fab fa-twitter" />
                </a>
              </li>
              <li className="icon3">
                <a
                  href="https://www.facebook.com/resurrectionremixrom"
                  target="_blank">
                  <i className="fab fa-google-plus-g" />
                </a>
              </li>
              <li className="icon4">
                <a
                  href="https://www.facebook.com/resurrectionremixrom"
                  target="_blank">
                  <i className="fab fa-github" />
                </a>
              </li>
            </ul>
          </div>
        </Section>
        <About />
        <Screenshot />
        <Cardcontent />
        <Feature />
        <Featurecontent />
      </Layout>
    );
  }
}
