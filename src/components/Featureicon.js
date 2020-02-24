import React from 'react';

const Featureicon = props => (
  <container>
    <section className="section ">
      <div className="card">
        <span className="icon">{props.icon}</span>
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
  </container>
);
export default Featureicon;
