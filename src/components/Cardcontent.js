import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const Container = styled.div`
  margin: 0rem;
  padding: 0rem;
  background: #000000;
`;

const Cardcontent = () => (
  <Container>
    <div className="columns ">
      <div className="column">
        <div className="card-image text">
          <Card
            img="../images/screenshot_04.png"
            title="Interface Customizations"
            subtitle="Customize every visible elements in the ROM, from status bar to navigation bar"
          />
        </div>
      </div>
      <div className="column">
        <div className="card-image text">
          <Card
            img="../images/screenshot_05.png"
            title="Lockscreen Customizations"
            subtitle="Tweak your lockscreen's view and functionality with plenty of settings to customize"
          />
        </div>
      </div>
      <div className="column">
        <div className="card-image text">
          <Card
            img="../images/screenshot_06.png"
            title="Buttons Customizations"
            subtitle="Make the limited number of buttons do unlimited number of things for you"
          />
        </div>
      </div>
    </div>
  </Container>
);
export default Cardcontent;
