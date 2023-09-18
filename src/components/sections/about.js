import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      background: transparent;
      outline: 0;

      &:after {
        top: 15px;
        left: 15px;
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 20px;
      left: 20px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = ['Flutter', 'Firebase', 'Django', 'git', 'Agile Methodologies', 'SOLID', 'CI/CD', 'UI/UX', 'Google Cloud', 'AWS', 'Technical lead', 'Full-Stack development', 'SAP', 'ABAP', 'Dynamics NAV'];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
        <div>
          <p>
            I consider myself an intelligent, curious, and proactive individual, passionate about technology from a very young age. My interest in technology led me to delve into the world of computer science at a young age and learn programming on my own. I have a solid background in Computer Engineering, having successfully completed my master's degree at UPV. During my academic journey, I had the opportunity to work on research projects, which resulted in the publication of a paper. This experience allowed me to develop technical skills and acquire fundamental knowledge in various areas of computer science.
          </p>

          <p>
            Currently, I am a part of the Trialing team, where I play an integral role in application development and specialize in frontend development with Flutter. I work closely with my colleagues to develop frontend and backend solutions, and I have experience in implementing common features in mobile apps, such as Push notifications and DeepLinks. My focus extends beyond application development; I also possess strong project management skills. At Trialing, I have taken on responsibilities and demonstrated effective decision-making and successful project delivery.
          </p>

          <p>
            Furthermore, I have had the opportunity to apply my knowledge in network administration, resolving issues and implementing network protocols to ensure enhanced security, such as SSO, JWT, and mTLS, as well as ensuring reliable connectivity through pagination techniques and database resource management. My experience in this field has strengthened my ability to comprehensively tackle technological challenges, blending project management and network administration.
          </p>

          <p>
            In my free time, I am passionate about entrepreneurship and exploring ideas related to computer science. I enjoy the challenge of turning concepts into tangible realities and constantly seek opportunities to apply my technical skills and knowledge in innovative projects. Outside of my professional pursuits, I also enjoy playing the piano, traveling, and socializing. These activities allow me to maintain a healthy balance between my personal and professional life, inspiring me to be a creative and energetic individual in all aspects of my life.
          </p>
        </div>
          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/me.jpg"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
