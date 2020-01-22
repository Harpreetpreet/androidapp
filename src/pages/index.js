import React from 'react';
import styled from 'styled-components';

import Seo from '../components/Seo';
import Layout from '../components/Layout';

const Section = styled.div`
  text-align: center;
  background-image: url('../images/top-bg.jpg');
  background-attachment: fixed;
  background-size:cover;
  .container {
    padding-top: 10rem;
  }
  h1 {
    color: ${props => props.theme.mainBrandColor} !important;
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
          </div>
        </Section>
      </Layout>
    );
  }
}
