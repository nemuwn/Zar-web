import React from "react";
import styled from "styled-components";

const Tape__wrapper = styled.div`
  margin-top: -4px;
  box-sizing: content-box;
  display: block;
  position: relative;
 
  overflow: hidden;
  background-color: #202121;;
  color: #f4f7f6;;

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
    -webkit-animation-duration: 70s;
    animation-duration: 70s;
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
