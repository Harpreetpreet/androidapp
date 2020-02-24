/* eslint-disable react/destructuring-assignment */
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  .icon {
    color: #c82428;
  }
  .card {
    min-height: 13rem;
    background: #212121;s
  }
`;

const Featureicon = props => (
  <Container>
    <div className="card">
      <div className="card-content has-text-centered">
        <span className="icon is-size-1 ">
          <i className={props.icon} />
        </span>
        <div className="media">
          <div className="media-content">
            <h1 className="title is-5  has-text-centered has-text-white">
              {props.title}
            </h1>
            <p className=" is-size-6  has-text-centered has-text-white">
              {props.subtitle}
            </p>
          </div>
        </div>
      </div>
    </div>
  </Container>
);
export default Featureicon;
