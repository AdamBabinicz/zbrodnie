import React from "react";
import styled from "styled-components";
import Logo from "../assets/12.png";
import { motion } from "framer-motion";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLocomotiveScroll } from "react-locomotive-scroll";

const Section = styled.section`
  min-height: 600px;
  height: 100%;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  position: relative;
  margin: 5rem auto;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 10vw;
    height: auto;

    @media (max-width: 48em) {
      width: 30vw;
    }
  }
  h3 {
    font-size: ${(props) => props.theme.fontlg};
    font-family: "Nosifer", cursive;
    color: ${(props) => props.theme.textR};

    @media (max-width: 48em) {
      font-size: ${(props) => props.theme.fontmd};
      margin-bottom: 1rem;
    }
  }
`;

const FooterComponent = styled(motion.footer)`
  width: 80vw;

  @media (max-width: 48em) {
    width: 90vw;
  }

  ul {
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin: 2rem;
    margin-top: 4rem;
    padding: 0 1rem;
    border-top: 1px solid ${(props) => props.theme.text};
    border-bottom: 1px solid ${(props) => props.theme.text};

    @media (max-width: 48em) {
      width: 90vw;
      margin: 0 auto;
      justify-content: center;
    }
  }

  li {
    padding: 2rem;
    font-size: ${(props) => props.theme.fontlg};
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.4s ease;

    &:hover {
      transform: scale(1.1);
    }

    @media (max-width: 48em) {
      padding: 1rem;
      font-size: ${(props) => props.theme.fontmd};
    }
  }
`;

const Bottom = styled.div`
  padding: 0.5rem 0;
  margin: 0 4rem;
  font-size: ${(props) => props.theme.fontlg};
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    text-decoration: underline;
  }

  @media (max-width: 64em) {
    flex-direction: column;
    justify-content: center;
    width: 100%;
    margin: 0;

    span:nth-child(2) {
      text-align: center;
      margin-top: 1rem;
      font-size: ${(props) => props.theme.fontxs};
    }
    span {
      transform: none !important;
      font-size: ${(props) => props.theme.fontsm};
    }
  }

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.md};
  }
`;

const Footer = () => {
  const { scroll } = useLocomotiveScroll();
  const handleScroll = (id) => {
    let elem = document.querySelector(id);
    scroll.scrollTo(elem, {
      offset: "-100",
      duration: "2000",
      easing: [0.25, 0.0, 0.35, 1.0],
    });
  };

  return (
    <Section>
      <LogoContainer>
        <img data-scroll data-scroll-speed="2" src={Logo} alt="..." />
        <h3 data-scroll data-scroll-speed="-1">
          Zbrodniarz wojenny
        </h3>
      </LogoContainer>
      <FooterComponent
        initial={{ y: "-400px" }}
        whileInView={{ y: 0 }}
        viewport={{ once: false }}
        transition={{
          duration: 1.5,
        }}
      >
        <ul>
          <li onClick={() => handleScroll("#start")}>Start</li>
          <li onClick={() => handleScroll(".zamordowani")}>Zamordowani</li>
          <li onClick={() => handleScroll("#ludobojstwo")}>Ludobójstwo</li>
          <li onClick={() => handleScroll("#okrucienstwo")}>Okrucieństwo</li>
          <li>
            <a
              href="//www.youtube.com/watch?v=laFmvsOp-z0"
              target="_blank"
              rel="noopener noreferrer"
            >
              Zobacz
            </a>
          </li>
          <li>
            <a
              href="//ciekawostkihistoryczne.pl/2017/05/03/najbardziej-krwiozerczy-seryjny-morderca-w-najnowszej-historii"
              target="_blank"
              rel="noopener noreferrer"
            >
              Czytaj
            </a>
          </li>
        </ul>
        <Bottom>
          <span
            data-scroll
            data-scroll-speed="2"
            data-scroll-direction="horizontal"
          >
            2022 - {new Date().getFullYear()}.
          </span>
          <span
            data-scroll
            data-scroll-speed="-2"
            data-scroll-direction="horizontal"
          >
            &nbsp;"Do Mnie należy pomsta. Ja wymierzę zapłatę" - mówi&nbsp;
            <a
              href="https://biblia.deon.pl/rozdzial.php?id=281"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pan
            </a>
            .
          </span>
        </Bottom>
      </FooterComponent>
    </Section>
  );
};

export default Footer;
