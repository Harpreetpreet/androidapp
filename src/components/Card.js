import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  .card-image {
    background: black;
    height: 42rem;
    background-attachment: fixed;
  }
  .long {
    height: 40rem !important;
  }
  .card-content {
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
        <div className="card-image">
          <figure className="image is-4by3">
            <img className="long" src={props.img} alt="Placeholder image" />
          </figure>
        </div>
        <div className="card-content">
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
