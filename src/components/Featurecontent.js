import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const Container = styled.div`
  background: black;
`;

const Featurecontent = () => (
  <Container>
    <div className="columns ">
      <div className="column">
        <div className="card-image text">
          <Card
            title="Interface Customizations"
            subtitle="Customize every visible elements in the ROM, from status bar to navigation bar"
          />
        </div>
      </div>
      <div className="column">
        <div className="card-image text">
          <Card
            title="Interface Customizations"
            subtitle="Customize every visible elements in the ROM, from status bar to navigation bar"
          />
        </div>
      </div>
      <div className="column">
        <div className="card-image text">
          <Card
            title="Interface Customizations"
            subtitle="Customize every visible elements in the ROM, from status bar to navigation bar"
          />
        </div>
      </div>
      <div className="column">
        <div className="card-image text">
          <Card
            title="Interface Customizations"
            subtitle="Customize every visible elements in the ROM, from status bar to navigation bar"
          />
        </div>
      </div>
    </div>
  </Container>
);
export default Featurecontent;
