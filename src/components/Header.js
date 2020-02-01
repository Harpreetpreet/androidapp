/* eslint global-require: 0 */

import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Section = styled.section`
  background: black;
  margin-bottom: 1rem;
  padding: 1rem 1.5rem;
  font-family: ${props => props.theme.primaryFontFamily};
  .navbar {
    background: #000000;
  }
  .home:hover {
    color: #b82124 !important;
  }
  .navbar-brand {
    margin-top: 1rem;
    margin-bottom: 1rem;
    margin-right: 20px;
    .navbar-item img {
      max-height: 3.75rem;
    }
  }
  .navbar-menu {
    margin-top: 1rem;
    margin-bottom: 1rem;
    @media screen and (max-width: 600px) {
      position: absolute;
      width: 100%;
      transition: 0.6s;
    }
  }
  .navbar-item {
    background: transparent !important;
    font-weight: 700;
    font-size: 1.2rem;
    :hover {
      color: ${props => props.theme.darkAccent};
    }
  }
  .navbar-burger {
    background-color: #1c1323;
    color: #fff;
    opacity: 0.6;
    border-radius: 4px;
  }
  margin: 0rem;
  padding: 0rem;
`;

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: false,
    };
  }

  handleMobileMenu() {
    const { isActive } = this.state;

    this.setState({
      isActive: !isActive,
    });
  }

  render() {
    const { isActive } = this.state;

    return (
      <Section className="section">
        <div className="container">
          <nav
            className="navbar is-fixed-top"
            role="navigation"
            aria-label="main navigation">
            <div className="navbar-brand">
              <Link
                className="home navbar-item is-size-4 has-text-white"
                to="/">
                Resurrection Remix OS
              </Link>
              <a
                href="#"
                role="button"
                className={
                  isActive
                    ? 'navbar-burger burger mobile is-active'
                    : 'navbar-burger burger mobile'
                }
                aria-label="menu"
                aria-expanded="false"
                data-target="navbarBasicExample"
                onClick={() => this.handleMobileMenu()}>
                <span aria-hidden="true" />
                <span aria-hidden="true" />
                <span aria-hidden="true" />
              </a>
            </div>
            <div className={isActive ? 'navbar-menu is-active' : 'navbar-menu'}>
              <div className="navbar-end">
                <Link to="/" className="navbar-item">
                  Screenshots
                </Link>
                <Link to="/about" className="navbar-item">
                  Features
                </Link>
                <Link to="/news" className="navbar-item">
                  Downloads
                </Link>
                <Link to="/contact" className="navbar-item">
                  Team
                </Link>
                <Link to="/contact" className="navbar-item">
                  Credits
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </Section>
    );
  }
}
