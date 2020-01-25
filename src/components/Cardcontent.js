import React from 'react';
import styled from 'styled-components';

const Container = styled.div``;
const Cardcontent = props => (
  <Container>
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={props.img} alt="Placeholder image" />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">{props.title}</p>
            <p className="subtitle is-6">{props.subtitle}</p>
          </div>
        </div>
      </div>
    </div>
  </Container>
);
export default Cardcontent;
