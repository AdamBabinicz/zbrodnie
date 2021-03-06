import React from "react";
import styled from "styled-components";
import img from "../assets/10.png";
import img1 from "../assets/6.png";
import img2 from "../assets/9.png";

const Section = styled.section`
  position: relative;
  min-height: 100vh;
  width: 80vw;
  overflow: hidden;
  display: flex;
  margin: 0 auto;

  @media (max-width: 48em) {
    width: 90vw;
  }

  @media (max-width: 30em) {
    width: 100vw;
  }
`;

const Title = styled.h3`
  font-size: ${(props) => props.theme.fontxl};
  font-family: "Nosifer", cursive;
  font-weight: lighter;
  position: absolute;
  top: 1rem;
  left: 5%;
  z-index: 5;
  color: ${(props) => props.theme.textR};

  @media (max-width: 64em) {
    font-size: ${(props) => `calc(${props.theme.fontxxl} - 8vw)`};
    top: 0;
    left: 0;
  }

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontlg};
  }
`;

const Left = styled.div`
  width: 50%;
  font-family: "Caladea", serif;
  font-size: ${(props) => props.theme.fontlg};
  position: relative;
  z-index: 5;
  margin-top: 10%;

  @media (max-width: 64em) {
    width: 80%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) !important;
    margin: 0 auto;
    padding: 2rem;
    backdrop-filter: blur(2px);
    background: ${(props) => `rgba(${props.theme.textRgba},0.4)`};
    border-radius: 20px;
  }

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontlg};
  }

  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontmd};
    width: 90%;
  }
`;

const Right = styled.div`
  width: 50%;
  position: relative;
  margin-top: 5rem;

  img {
    width: 100%;
    height: auto;
  }

  .small-img-1 {
    width: 90%;
    position: absolute;
    right: 35%;
    top: 20%;
  }

  .small-img-2 {
    width: 70%;
    position: absolute;
    left: 60%;
    bottom: 15%;
  }

  @media (max-width: 64em) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      height: 100vh;
      object-fit: contain;
    }
    /* .small-img-1 {
      width: 30%;
      height: auto;
      left: 5%;
      bottom: 10%;
    }
    .small-img-2 {
      width: 30%;
      height: auto;
      left: 60%;
      bottom: 20%;
    } */
  }
`;

const About = () => {
  return (
    <Section id="fixed-target" className="zamordowani">
      <Title
        data-scroll
        data-scroll-speed="-2"
        data-scroll-direction="horizontal"
      >
        Znani zamordowani
      </Title>
      <Left data-scroll data-scroll-sticky data-scroll-target="#fixed-target">
        - Rosja pope??ni??a prawie wszystkie mo??liwe zbrodnie wojenne, jakie
        widzia??a ludzko????. Liczba ofiar cywilnych jest znacznie wi??ksza ni?? w
        si??ach zbrojnych Ukrainy.
        <br />
        <br /> - Istniej?? straszne historie o kobietach gwa??conych godzinami, a
        potem zamordowanych. Ka??dy ??o??nierz, kt??ry pope??ni?? t?? zbrodni?? wojenn??,
        zostanie poci??gni??ty do odpowiedzialno??ci. Putin i Kreml to zbrodniarze
        wojenni!
        <br />
        <br /> - Nie mog?? przemilcze?? zab??jstw cywil??w. To, co robi?? Rosjanie,
        to nie wojna, to terroryzm i celowe ludob??jstwo narodu ukrai??skiego ???
        pisze w wiadomo??ci przes??anej PAP Dany??o, za??o??yciel kana??u w serwisie
        Telegram, zbieraj??cego dowody na rosyjskie zbrodnie wojenne pope??niane w
        Ukrainie.
        <br />
        <br />
        <p>
          <strong>Oksana Szwe?? - aktorka z Kijowa</strong>
        </p>
        <p>
          <strong>Julia Zdanowska - matematyczka z Charkowa</strong>
        </p>
        <p>
          <strong>Dima Martynenko - pi??karz FK Hostomel</strong>
        </p>
      </Left>
      <Right>
        <img src={img} alt="..." />
        <img
          data-scroll
          data-scroll-speed="5"
          src={img1}
          className="small-img-1"
          alt="..."
        />
        <img
          data-scroll
          data-scroll-speed="-2"
          src={img2}
          className="small-img-2"
          alt="..."
        />
      </Right>
    </Section>
  );
};

export default About;
