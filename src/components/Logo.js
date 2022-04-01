import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { GiBombingRun } from "react-icons/gi";
import { motion } from "framer-motion";
import img from "../assets/6.svg";

const Container = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  color: ${(props) => props.theme.text};
  z-index: 5;
  width: 100%;

  a {
    display: flex;
    align-items: flex-end;
  }

  svg {
    height: auto;
    width: 4rem;
    overflow: visible;
    stroke-linejoin: round;
    stroke-linecap: round;

    g {
      path {
        stroke: ${(props) => props.theme.text};
      }
    }
  }
`;

const Text = styled(motion.h1)`
  font-size: ${(props) => props.theme.fontlg};
  color: ${(props) => props.theme.textR};
  padding-bottom: 0.5rem;
`;

const textVariants = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: -5,

    transition: {
      duration: 2,
      delay: 5,
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
      delay: 3,
      ease: "easeInOut",
    },
  },
};

const Logo = () => {
  return (
    <Container>
      <Link to="/">
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
      </Link>
    </Container>
  );
};

export default Logo;
