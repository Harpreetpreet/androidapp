import React from 'react';
import styled from 'styled-components';
import Featureicon from './Featureicon';

const Container = styled.div`
  background: black;
`;

const Featurecontent = () => (
  <Container>
    <section>
      <div className="container">
        <div className="columns ">
          <div className="column">
            <div className="card-image text">
              <Featureicon
                title="Stable"
                subtitle="Every build is compiled to provide a stable android experience"
                icon="fas fa-wrench"
              />
            </div>
          </div>
          <div className="column">
            <div className="card-image text">
              <Featureicon
                title="Android Oreo/Pie"
                subtitle="Always get the latest of the android source code and security updates"
                icon="fas fa-cog"
              />
            </div>
          </div>
          <div className="column">
            <div className="card-image text">
              <Featureicon
                title="Devices"
                subtitle="Available for a wide range of devices with support from developers in forums"
                icon="fas fa-mobile-alt"
              />
            </div>
          </div>
          <div className="column">
            <div className="card-image text">
              <Featureicon
                title="Open Source"
                subtitle="Source code of the OS is available at Github. Fork us!"
                icon="fab fa-android"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </Container>
);
export default Featurecontent;
