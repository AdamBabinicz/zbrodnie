import React, { useEffect, useRef, useLayoutEffect } from "react";
import styled from "styled-components";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
import { motion } from "framer-motion";
import img1 from "../assets/12.jpg";
import img2 from "../assets/1.webp";
import img3 from "../assets/29.jpg";
import img4 from "../assets/2.webp";
import img5 from "../assets/3.webp";
import img6 from "../assets/2.jfif";
import img7 from "../assets/16.jpg";
import img8 from "../assets/17.jpg";
import img9 from "../assets/18.jpg";
import img10 from "../assets/4.webp";

const Section = styled.section`
  min-height: 100vh;
  height: auto;
  width: 100vw;
  margin: 0 auto;
  overflow: hidden;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
`;

const Title = styled.h3`
  font-size: ${(props) => props.theme.fontxl};
  font-family: "Stick", sans-serif;
  font-weight: lighter;
  text-shadow: 1px 1px 1px ${(props) => props.theme.body};
  position: absolute;
  top: 1rem;
  left: 5%;
  z-index: 11;
  color: ${(props) => props.theme.text};

  @media (max-width: 64em) {
    font-size: ${(props) => `calc(${props.theme.fontxxl} - 8vw)`};
  }

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontlg};
  }
`;

const Left = styled.div`
  width: 35%;
  background: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  min-height: 100vh;
  z-index: 5;
  font-family: "Caladea", serif;
  position: fixed;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    font-size: ${(props) => props.theme.lg};
    width: 80%;
    margin: 0 auto;
    line-height: 1.5rem;
  }

  @media (max-width: 64em) {
    p {
      font-size: ${(props) => props.theme.fontmd};
    }
  }

  @media (max-width: 48em) {
    width: 40%;
    p {
      font-size: ${(props) => props.theme.fontsm};
    }
  }

  @media (max-width: 30em) {
    p {
      font-size: ${(props) => props.theme.fontxs};
      display: -webkit-box;
      -webkit-line-clamp: 8;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  }
`;

const Right = styled.div`
  position: absolute;
  left: 35%;
  padding-left: 30%;
  min-height: 100vh;
  /* width: 65%; */
  background: ${(props) => props.theme.grey};
  display: flex;
  justify-content: flex-start;
  align-items: center;

  h4 {
    width: 5rem;
    margin: 1rem 2rem;
    font-family: "Caladea", serif;
  }
`;

const Item = styled(motion.div)`
  width: 45rem;
  margin-right: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 48em) {
    margin-right: 1rem;
  }

  img {
    width: 100%;
    height: 35rem;
    object-fit: cover;

    @media (max-width: 48em) {
      height: 30rem;
      max-height: 100%;
    }
  }
  h4 {
    display: inline-flex;
    width: fit-content;
    text-align: center;
  }

  @media (max-width: 48em) {
    width: 30rem;
  }
`;

const Product = ({ img, title = "" }) => {
  return (
    <Item
      initial={{ filter: "grayscale(100%)" }}
      whileInView={{ filter: "grayscale(0%)" }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false, amount: "all" }}
    >
      <img src={img} alt={title} />
      <h4>{title}</h4>
    </Item>
  );
};

const Shop = () => {
  gsap.registerPlugin(ScrollTrigger);

  const ref = useRef(null);
  const horizontalRef = useRef(null);

  useLayoutEffect(() => {
    let element = ref.current;
    let scrollingElement = horizontalRef.current;
    let pinWrapWidth = scrollingElement.offsetWidth;
    let t1 = gsap.timeline();

    setTimeout(() => {
      t1.to(element, {
        scrollTrigger: {
          trigger: element,
          start: "top top",
          end: pinWrapWidth,
          scroller: ".App",
          scrub: true,
          pin: true,
          // markers: true,
        },
        height: `${scrollingElement.scrollWidth}px`,
        ease: "none,",
      });

      t1.to(scrollingElement, {
        scrollTrigger: {
          trigger: scrollingElement,
          start: "top top",
          end: pinWrapWidth,
          scroller: ".App",
          scrub: true,
          // markers: true,
        },
        x: -pinWrapWidth,
        ease: "none,",
      });
      ScrollTrigger.refresh();
    }, 1000);

    return () => {
      t1.kill();
      ScrollTrigger.kill();
    };
  }, []);

  return (
    <Section ref={ref} id="ludobojstwo">
      <Title data-scroll data-scroll-speed="-1">
        Ludobójstwo w Ukrainie
      </Title>
      <Left>
        <p>Kto może stanąć przed Trybunałem w Hadze?</p>
        <p>
          Putin, ale nie tylko. Przed tym Trybunałem mogą stanąć osoby wydające
          rozkazy wojsku, ale też minister spraw wewnętrznych czy minister spraw
          zagranicznych. - Już dzisiaj możemy zaobserwować dokonywanie zbrodni
          wojennych, które dotyczą obiektów nie będącymi celami wojskowymi.
          Jeśli wojska rosyjskie ostrzeliwują szpitale lub domy mieszkalne,
          zabijają osoby cywilne, które nie biorą udziału w akcjach zbrojnych,
          torturują je, to są to zbrodnie wojenne. Takimi zbrodniami są także
          ataki na obiekty chronione, jak np. obiekty wpisane na światową listę
          dziedzictwa ludzkości lub inne obiekty historyczne.
        </p>
        <br />
        <br />
        <p>
          Jak zauważa organizacja Amnesty International, inwazja Rosji na
          Ukrainę charakteryzuje się masowymi atakami na obszary cywilne i
          uderzeniami w obiekty chronione takie, jak szpitale. - Rosyjskie
          wojsko wykazało rażące lekceważenie dla życia cywilów, używając
          pocisków balistycznych i innej broni wybuchowej o szerokim działaniu
          obszarowym na gęsto zaludnionych obszarach. Niektóre z tych ataków
          mogą być zbrodniami wojennymi. Rosyjski rząd, który fałszywie
          twierdzi, że używa tylko broni precyzyjnie naprowadzanej, powinien
          wziąć odpowiedzialność za te czyny – powiedziała Agnes Callamard,
          sekretarz generalny Amnesty International. I dodała, że rosyjskie
          wojska powinny natychmiast zaprzestać nieprecyzyjnych ataków z
          pogwałceniem praw wojny.
          {/*  - Kontynuacja użycia pocisków balistycznych i
          innej nieprecyzyjnej broni wybuchowej powodującej śmierć i obrażenia
          ludności cywilnej jest niewybaczalna. */}
        </p>
      </Left>
      <Right ref={horizontalRef}>
        <Product img={img1} title="Zrujnowana przez Rosjan dzielnica Kijowa" />
        <Product img={img2} title="Zniszczony budynek w Kijowie" />
        <Product img={img3} title="Zniszczenia po ataku na Kijów" />
        <Product img={img4} title="Ostrzał Charkowa" />
        <Product img={img5} title="Cywilny budynek mieszkalny w Borodziance" />
        <Product img={img6} title="Natalia Sevriukova przed swoim domem" />
        <Product
          img={img7}
          title="Strażacy gaszą pożar w bloku mieszkalnym w Kijowie"
        />
        <Product
          img={img8}
          title=" Ukraińskie dzieci uciekają przed rosyjskimi bombami"
        />
        <Product img={img9} title="Zbombardowany przez Rosjan most w Irpinie" />
        <Product img={img10} title="Media donoszą o śmierci cywilów" />
      </Right>
    </Section>
  );
};

export default Shop;
