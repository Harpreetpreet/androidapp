import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  background-image: url('../images/yellow.png');
  h1 {
    line-height: 3rem;
    font-family: cursive;
  }
  margin: 0rem;
  padding: 0rem;
`;

const About = () => (
  <Section className="section is-medium">
    <div className="container">
      <h1 className="has-text-white is-size-3 has-text-centered is-size-4-mobile">
        We work to make your android experience elegant.
      </h1>
      <h1 className="has-text-white is-size-3 has-text-centered is-size-4-mobile">
        Handpicked features beautifully packed in one OS.
      </h1>
    </div>
  </Section>
);
export default About;
