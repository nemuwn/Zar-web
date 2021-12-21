import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import styled from "styled-components";

const banners: string[] = [
  "assets/banner/image1.jpg",
  "assets/banner/image2.jpg",
  "assets/banner/image3.jpg",
];

const Container = styled.div`
  width: 100%;
`;
const LeftButton = styled.button`
  width: 100%;
  height: 100%;
  color: red;
  background-color: transparent;
  border: none;
  z-index: 2;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  cursor: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDMiIGhlaWdodD0iNDMiIHZpZXdCb3g9IjAgMCA0MyA0MyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE4LjI4MTUgNS42MjQ3NkwyLjM3NTI3IDIxLjUzMSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIzLjE4NzUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNNDAuNjI0OSAyMS41MzExTDIuMzc0OTQgMjEuNTMxMiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIzLjE4NzUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNOC43NSAyNy45MzczTDE4LjI4MTIgMzcuNDY4NSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIzLjE4NzUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K),
    auto;
`;
const RightButton = styled.button`
  width: 100%;
  height: 100%;
  color: red;
  background-color: transparent;
  border: none;
  z-index: 2;
  position: absolute;
  top: 50%;
  left: 100%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  cursor: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDMiIGhlaWdodD0iMzkiIHZpZXdCb3g9IjAgMCA0MyAzOSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTI0LjcxODggMzUuMzc1Mkw0MC42MjUgMTkuNDY5IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjMuMTg3NSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0yLjM3NTA4IDE5LjQ2OTFMNDAuNjI1MSAxOS40Njg5IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjMuMTg3NSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0zNC4yNSAxMy4wNjI3TDI0LjcxODggMy41MzE1MiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIzLjE4NzUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K),
    auto;
`;
const BannerImages = styled.div<{ imgsrc: string }>`
  display: inline-block;
  width: 100%;
  height: calc(90vh - 150px);
  background-size: cover;
  background-image: url(${(props) => props.imgsrc});
  background-repeat: no-repeat, repeat;
  background-color: #cccccc;
  background-position: center;
`;

export const Banner = () => {
  return (
    <Container>
      <Carousel
        infiniteLoop
        autoPlay
        autoFocus
        showArrows={false}
        renderArrowPrev={(clickHandler) => (
          <LeftButton onClick={clickHandler} />
        )}
        renderArrowNext={(clickHandler) => (
          <RightButton onClick={clickHandler} />
        )}
      >
        {banners.map((src) => (
          <BannerImages imgsrc={src} />
        ))}
      </Carousel>
    </Container>
  );
};
