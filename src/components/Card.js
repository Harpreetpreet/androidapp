import React from 'react';
import styled from 'styled-components';
import Cardcontent from './Cardcontent';

const Container = styled.div``;

const Card = () => (
  <Container>
              <div className="columns ">
            <div className="column">
              <div className="card-image text">
                <Card
                  img="https://colorlib.com/preview/theme/shotgear/img/blog/blog_1.png"
                  title="MAD WHALES GHATHERING OPEN CAN'T"
                  subtitle="Is life form dominion under very seasons together them divide so, she'd bearing sixth"
                />
              </div>
            </div>
            </div>
      <Cardcontent img="../images/screenshot_01.png" />
      <Cardcontent img="../images/screenshot_05.png" />
      <Cardcontent img="../images/screenshot_03.png" />
  </Container>
);
export default Card;
