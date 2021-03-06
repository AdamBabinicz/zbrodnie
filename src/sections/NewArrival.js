import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import styled from "styled-components";
import img1 from "../assets/22.jpg";
import img2 from "../assets/25.jpg";
import img3 from "../assets/26.jpg";
import img4 from "../assets/27.jpg";

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Overlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30vw;
  height: 90vh;
  z-index: 11;
  box-shadow: 0 0 0 4vw ${(props) => props.theme.text};
  border: 3px solid ${(props) => props.theme.body};

  @media (max-width: 70em) {
    width: 40vw;
    height: 80vh;
  }

  @media (max-width: 64em) {
    width: 50vw;
    box-shadow: 0 0 0 60vw ${(props) => props.theme.text};
  }

  @media (max-width: 48em) {
    width: 60vw;
  }

  @media (max-width: 30em) {
    width: 80vw;
    height: 60vh;
  }
`;

const Title = styled.h3`
  font-size: ${(props) => props.theme.fontxl};
  font-family: "Nosifer", cursive;
  font-family: "Stick", sans-serif;
  font-weight: lighter;
  text-shadow: 1px 1px 1px ${(props) => props.theme.text};
  position: absolute;
  top: 1rem;
  left: 5%;
  z-index: 11;
  color: ${(props) => props.theme.body};

  @media (max-width: 64em) {
    font-size: ${(props) => `calc(${props.theme.fontxxl} - 8vw)`};
  }

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontlg};
  }
`;

const Text = styled.div`
  width: 35%;
  font-family: "Caladea", serif;
  font-size: ${(props) => props.theme.fontlg};
  position: absolute;
  z-index: 11;
  padding: 2rem;
  top: 0;
  right: 0;

  @media (max-width: 48em) {
    display: none;
  }

  /* @media (max-width: 30em) {
    display: -webkit-box;
    -webkit-line-clamp: 12;
    -webkit-box-orient: vertical;
    overflow: hidden;
  } */
`;

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  width: 25vw;
  height: 200vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 64em) {
    width: 30vw;
  }

  @media (max-width: 48em) {
    width: 40vw;
  }

  @media (max-width: 30em) {
    width: 60vw;
  }
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1rem 0;

  img {
    width: 100%;
    height: auto;
    z-index: 5;
    /* object-fit: cover; */
  }
`;

const Product = ({ img, title = "" }) => {
  return (
    <Item>
      <img src={img} alt={title} />
      <h4>{title}</h4>
    </Item>
  );
};

const NewArrival = () => {
  gsap.registerPlugin(ScrollTrigger);

  const ref = useRef(null);
  const ScrollingRef = useRef(null);

  useLayoutEffect(() => {
    let element = ref.current;
    let scrollingElement = ScrollingRef.current;

    let t1 = gsap.timeline();

    setTimeout(() => {
      t1.to(element, {
        scrollTrigger: {
          trigger: element,
          start: "top top",
          end: "bottom+=100% top-=100%",
          scroller: ".App",
          scrub: true,
          pin: true,
          // markers: true,
        },

        ease: "none,",
      });

      t1.fromTo(
        scrollingElement,
        {
          y: "0",
        },
        {
          y: "-100%",
          scrollTrigger: {
            trigger: scrollingElement,
            start: "top top",
            end: "bottom top",
            scroller: ".App",
            scrub: true,
            // markers: true,
          },
        }
      );
      ScrollTrigger.refresh();
    }, 1000);

    return () => {
      t1.kill();
      ScrollTrigger.kill();
    };
  }, []);

  return (
    <Section ref={ref} id="okrucienstwo">
      <Overlay />
      <Title
        data-scroll
        data-scroll-speed="-2"
        data-scroll-direction="horizontal"
      >
        Okrucie??stwo siepaczy Putina
      </Title>
      <Container ref={ScrollingRef}>
        <Product img={img1} title="Ranna dziewczynka." />
        <Product img={img2} title="Silny ostrza?? Charkowa." />
        <Product img={img3} title="Ju?? ponad 1200 ofiar w Mariupolu." />
        <Product img={img4} title="Ewakuacja ci????arnej w Mariupolu." />
      </Container>
      <Text data-scroll data-scroll-speed="-4">
        Media na ca??ym ??wiecie donosz??, ??e rosyjska armia nie oszcz??dza cywil??w.
        Ostrzeliwuje budynki mieszkalne, korytarze humanitarne, szpitale oraz
        szko??y. Wed??ug informacji podanych przez Prokuratur?? Generaln?? w wyniku
        inwazji Rosji w Ukrainie zgin????o 136 dzieci, a 199 zosta??o rannych. W
        samym obwodzie donieckim od wybuchu wojny ponios??o ??mier?? 18 dzieci, a
        29 odnios??o obra??enia. Ataki si?? rosyjskich zosta??y wymierzone w 570
        plac??wek edukacyjnych, a 73 z nich zosta??y doszcz??tnie zniszczone.
        <br />
        <br />W sobot?? 26 marca telewizja CNN poda??a, ??e rosyjski ??o??nierz
        strzeli?? w twarz 11-letniej dziewczynce. Do zdarzenia dosz??o na punkcie
        kontrolnym ko??o Wasyl??wki, gdy dziecko razem z mam??, siostr?? i babci??
        ucieka??o z miasta. Kula przesz??a przez szcz??k?? i utkwi??a w nasadzie
        j??zyka, a ranna dziewczynka trafi??a do szpitala, gdzie przesz??a
        operacj??.
      </Text>
    </Section>
  );
};

export default NewArrival;
