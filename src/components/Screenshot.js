import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin: 0rem;
  padding: 0rem;
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

const Screenshot = () => (
  <Container className="has-text-centered">
    <section className="section">
      <div className="icon">
        <i className="fas fa-desktop" />
      </div>
      <h1 className="has-text-white is-size-2 has-text-weight-semibold">
        Screenshots
      </h1>
    </section>
  </Container>
);
export default Screenshot;
