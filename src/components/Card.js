/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  .long {
    height: 40rem !important;
  }
  .content {
    background: black;
  }
  p {
    color: white !important;
  }
`;
const Card = props => (
  <Container>
    <section className="section ">
      <div className="card">
        <div className="img card-image">
          <figure className="image is-4by3">
            <img className="long" src={props.img} alt="Placeholder image" />
          </figure>
        </div>
        <div className="card-content content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4  has-text-centered">{props.title}</p>
              <p className="subtitle is-7  has-text-centered">
                {props.subtitle}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Container>
);
export default Card;
