import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background: #000000;
  background-attachment: fixed;
  .icon {
    text-align: center;
    margin-top: 6rem;
    font-size: 3rem;
    border: 1px solid black;
    border-radius: 72px;
    padding: 55px;
    background: white;
  }
  h1 {
    line-height: 5rem;
    font-family: cursive;
  }
`;
const Feature = () => (
  <Container className="has-text-centered">
    <section className="section">
      <div className="icon">
        <i className="fas fa-cog" />
      </div>
      <h1 className="has-text-white is-size-2 has-text-weight-semibold">
        Features
      </h1>
    </section>
  </Container>
);
export default Feature;
