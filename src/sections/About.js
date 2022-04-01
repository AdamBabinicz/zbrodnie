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
        - Rosja popełniła prawie wszystkie możliwe zbrodnie wojenne, jakie
        widziała ludzkość. Liczba ofiar cywilnych jest znacznie większa niż w
        siłach zbrojnych Ukrainy.
        <br />
        <br /> - Istnieją straszne historie o kobietach gwałconych godzinami, a
        potem zamordowanych. Każdy żołnierz, który popełnił tę zbrodnię wojenną,
        zostanie pociągnięty do odpowiedzialności. Putin i Kreml to zbrodniarze
        wojenni!
        <br />
        <br /> - Nie mogę przemilczeć zabójstw cywilów. To, co robią Rosjanie,
        to nie wojna, to terroryzm i celowe ludobójstwo narodu ukraińskiego –
        pisze w wiadomości przesłanej PAP Danyło, założyciel kanału w serwisie
        Telegram, zbierającego dowody na rosyjskie zbrodnie wojenne popełniane w
        Ukrainie.
        <br />
        <br />
        <p>
          <strong>Oksana Szweć - aktorka z Kijowa</strong>
        </p>
        <p>
          <strong>Julia Zdanowska - matematyczka z Charkowa</strong>
        </p>
        <p>
          <strong>Dima Martynenko - piłkarz FK Hostomel</strong>
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
