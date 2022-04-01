import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  touch-action: none;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  z-index: 6;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};

  svg {
    height: auto;
    width: 10vw;
    overflow: visible;
    stroke-linejoin: round;
    stroke-linecap: round;

    g {
      path {
        stroke: ${(props) => props.theme.text};
      }
    }

    @media (max-width: 48em) {
      width: 20vw;
    }
  }
`;

const Text = styled(motion.span)`
  font-size: ${(props) => props.theme.fontxl};
  color: ${(props) => props.theme.textR};
  padding-top: 0.5rem;

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontlg};
  }
`;

const textVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,

    transition: {
      duration: 1,
      yoyo: Infinity,
      ease: "easeInOut",
    },
  },
};

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,

    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};

const Loader = () => {
  return (
    <Container
      initial={{
        y: 0,
        opacity: 1,
      }}
      exit={{
        y: "100%",
        opacity: 0,
      }}
      transition={{
        duration: 2,
      }}
    >
      <svg viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="a">
            <feGaussianBlur in="SourceGraphic" stdDeviation="1" />
          </filter>
        </defs>
        <g>
          <motion.path
            variants={pathVariants}
            initial="hidden"
            animate="visible"
            d="m515.07 31.096l-302.65 293.8 163.14 5.428-258.84 245.12 109.64 1.9486-181.66 191.23 438.95-233.26-163.4 1.6422 330.75-251.66-178.91-0.4199 293.95-261.67-250.96 7.843z"
            fill="none"
            filter="url(#a)"
          />
          <motion.path
            variants={pathVariants}
            initial="hidden"
            animate="visible"
            d="m513.07 24.096l-302.65 293.8 163.14 5.428-258.84 245.12 109.64 1.9486-181.66 191.23 438.95-233.26-163.4 1.6422 330.75-251.66-178.91-0.4199 293.95-261.67-250.96 7.843z"
            fill="none"
            filter="url(#a)"
          />
        </g>
      </svg>
      <Text variants={textVariants} initial="hidden" animate="visible">
        Ukraina w ogniu
      </Text>
    </Container>
  );
};

export default Loader;
