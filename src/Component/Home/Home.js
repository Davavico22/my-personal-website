import React from 'react';
import './Home.css';
import Typical from 'react-typical'
import Icon from '../../Component/Icon/Icon';
import { NavLink } from 'react-router-dom';

function Home() {
    return (
      <div className="Home">
        <header className="Home-header">
          <img src="https://avatars0.githubusercontent.com/u/57295165?s=400&u=e12594f20ed0f40e56be958eb12622e04e4f1854&v=4" className="Home-logo" alt="logo" />
          <h2>Hi, I´m <u className="Sub-nombre">David Valdivia Vico</u>.</h2>
          <p>
            I´m a{' '}
            <Typical
              loop={Infinity}
              wrapper="b"
              steps={[
                'developer.',
                900,
                'computer engineer.',
                900,
                'lover of technology.',
                900,
                'happy developer =).',
                900
              ]}
            />
          </p>
          <br></br>
          <ul class="List-social">
            <li>
              <a title="Linkedin" href="https://www.linkedin.com/in/david-valdivia-davavico/" target="_black">
                <Icon  size="75px" color="#572364" icon="linkedin" />
              </a>
            </li>
            <li>
              <a title="GitHub" href="https://github.com/Davavico22" target="_black">
                <Icon  size="75px" color="#572364" icon="github" />
              </a>
            </li>
            <li>
              <NavLink to={"/resume"} title="CV"   target="_blank">
                <Icon size="75px" color="#572364" icon="profile" />
              </NavLink>
            </li>
            <li>
              <a title="Instagram" href="https://www.instagram.com/davavico/" target="_black">
                <Icon  size="75px" color="#572364" icon="instagram" />
              </a>
            </li>
            <li>
              <a title="Mail" href="mailto:davalvico@gmail.com">
                <Icon size="75px" color="#572364" icon="mail4" />
              </a>
            </li>
            
          </ul>
        </header>
      </div>
    );
  }
  
  export default Home;
  
