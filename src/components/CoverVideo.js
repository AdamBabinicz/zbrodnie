import React from "react";
import styled from "styled-components";
import MainVideo from "../assets/2.mp4";
import { motion } from "framer-motion";

const VideoContainer = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;

  @media (max-width: 40em) {
    background: url("./4.png") center/cover no-repeat fixed;
  }

  video {
    width: 100%;
    height: 100vh;
    object-fit: cover;

    @media (max-width: 40em) {
      object-position: center 10%;
      display: none;
    }

    @media (max-width: 30em) {
      object-position: center 50%;
    }
  }
`;

const DarkOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
`;

const Title = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.textR};

  div {
    display: flex;
    align-items: baseline;
  }

  h2 {
    font-family: "Nosifer", cursive;
    font-size: ${(props) => props.theme.fontxxl};
    text-shadow: 1px 1px 1px ${(props) => props.theme.body};
    text-align: center;
    font-weight: lighter;

    @media (max-width: 30em) {
      font-size: ${(props) => props.theme.fontlg};
    }

    :nth-child(1) {
      font-size: ${(props) => props.theme.fontG};
      align-items: baseline;

      @media (max-width: 30em) {
        font-size: ${(props) => props.theme.fontxxl};
      }
    }
  }

  h3 {
    font-family: "Caladea", serif;
    font-size: ${(props) => props.theme.fontxl};
    text-shadow: 1px 1px 1px ${(props) => props.theme.body};
    text-align: center;

    @media (max-width: 30em) {
      font-size: ${(props) => props.theme.fontmd};
      margin-top: -1.5rem;
    }
  }
`;

const container = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,

    transition: {
      delayChildren: 5,
      staggerChildren: 0.3,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
  },
};

const CoverVideo = () => {
  return (
    <>
      <VideoContainer>
        <DarkOverlay />
        <Title variants={container} initial="hidden" animate="show">
          <div>
            <motion.h2
              variants={item}
              data-scroll
              data-scroll-delay="0.14"
              data-scroll-speed="4"
              className="first"
            >
              Z
            </motion.h2>
            <motion.h2
              variants={item}
              data-scroll
              data-scroll-delay="0.13"
              data-scroll-speed="4"
            >
              b
            </motion.h2>
            <motion.h2
              variants={item}
              data-scroll
              data-scroll-delay="0.12"
              data-scroll-speed="4"
            >
              r
            </motion.h2>
            <motion.h2
              variants={item}
              data-scroll
              data-scroll-delay="0.11"
              data-scroll-speed="4"
            >
              o
            </motion.h2>
            <motion.h2
              variants={item}
              data-scroll
              data-scroll-delay="0.10"
              data-scroll-speed="4"
            >
              d
            </motion.h2>
            <motion.h2
              variants={item}
              data-scroll
              data-scroll-delay="0.09"
              data-scroll-speed="4"
            >
              n
            </motion.h2>
            <motion.h2
              variants={item}
              data-scroll
              data-scroll-delay="0.08"
              data-scroll-speed="4"
            >
              i
            </motion.h2>
            <motion.h2
              variants={item}
              data-scroll
              data-scroll-delay="0.07"
              data-scroll-speed="4"
            >
              e
            </motion.h2>
            <motion.h2
              variants={item}
              data-scroll
              data-scroll-delay="0.06"
              data-scroll-speed="4"
            >
              &nbsp;P
            </motion.h2>
            <motion.h2
              variants={item}
              data-scroll
              data-scroll-delay="0.05"
              data-scroll-speed="4"
            >
              u
            </motion.h2>
            <motion.h2
              variants={item}
              data-scroll
              data-scroll-delay="0.04"
              data-scroll-speed="4"
            >
              t
            </motion.h2>
            <motion.h2
              variants={item}
              data-scroll
              data-scroll-delay="0.03"
              data-scroll-speed="4"
            >
              i
            </motion.h2>
            <motion.h2
              variants={item}
              data-scroll
              data-scroll-delay="0.02"
              data-scroll-speed="4"
            >
              n
            </motion.h2>
            <motion.h2
              variants={item}
              data-scroll
              data-scroll-delay="0.01"
              data-scroll-speed="4"
            >
              a
            </motion.h2>
          </div>
          <motion.h3
            variants={item}
            data-scroll
            data-scroll-delay="0.04"
            data-scroll-speed="2"
          >
            Rzeź ludności cywilnej!
          </motion.h3>
        </Title>
        <video src={MainVideo} type="video/mp4" autoPlay muted loop />
      </VideoContainer>
    </>
  );
};

export default CoverVideo;

// https://www.youtube.com/watch?v=58oXVPeMYDc
