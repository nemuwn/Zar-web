import React from "react";
import styled from "styled-components";

const Tape__wrapper = styled.form`
  box-sizing: content-box;
  display: block;
  position: relative;
  width: 100%;
  background-color: #948e8e;

  @-webkit-keyframes ticker {
    0% {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
      visibility: visible;
    }

    100% {
      -webkit-transform: translate3d(-100%, 0, 0);
      transform: translate3d(-100%, 0, 0);
    }
  }

  @keyframes ticker {
    0% {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
      visibility: visible;
    }

    100% {
      -webkit-transform: translate3d(-100%, 0, 0);
      transform: translate3d(-100%, 0, 0);
    }
  }
  .ticker-tape--animate {
    padding-left: 100%;
  }
  .ticker-tape {
    max-height: 80px;
    width: 100%;
    padding: 20px 0;
    font-size: 3rem;
    font-weight: 600;
    letter-spacing: -0.14rem;
    line-height: 1.05;
    display: inline-block;
    box-sizing: content-box;
    white-space: nowrap;
    overflow: hidden;

    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    -webkit-animation-timing-function: linear;
    animation-timing-function: linear;
    -webkit-animation-name: ticker;
    animation-name: ticker;
    -webkit-animation-duration: 120s;
    animation-duration: 120s;
  }
`;

export default function TapeText() {
  return (
    <>
      <Tape__wrapper className=" color-mustard  ticker-tape--animate">
        <div className="ticker-tape">
          Everyone deserves a good night’s sleep · Everyone deserves a good
          night’s sleep · Everyone deserves a good night’s sleep · Everyone
          deserves a good night’s sleep · Everyone deserves a good night’s sleep
          · Everyone deserves a good night’s sleep · Everyone deserves a good
          night’s sleep · Everyone deserves a good night’s sleep · Everyone
          deserves a good night’s sleep · Everyone deserves a good night’s sleep
          ·
        </div>
      </Tape__wrapper>
    </>
  );
}