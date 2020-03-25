import styled from "styled-components"
import { device } from "breakpoints"
import { Button } from "../Button"
import EmblaCarouselReact from "embla-carousel-react"

export const CarouselContainer = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const EmblaComponent = styled(EmblaCarouselReact)`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-right: ${props => `${props.theme.mobileGutter}px`};

  @media ${device.desktop} {
    padding-right: ${props => `${props.theme.desktopGutter}px`};
  }

  @media ${device.large} {
    padding-right: 0;
  }

  ${props =>
    props.loop &&
    `
    padding-right:0 !important;
`};

  ${props =>
    props.fade &&
    `
    padding-right:0 !important;
`};
`
export const NextButton = styled(Button)`
  padding: 0;
  height: 60px;
  width: 60px;
  border-radius: 50%;
  background: grey;
  transform: scale(-1);
  position: relative;

  opacity: ${props => (props.disabled ? 0.5 : 1)};
  pointer-events: ${props => props.disabled && "none"};

  :hover {
    background: black;
  }

  svg {
    width: 10px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
  }
`
export const PreviousButton = styled(NextButton)`
  margin-right: 20px;
  transform: scale(1);
`

export const Slide = styled.div`
  position: relative;
  flex: 0 0 auto;

  ${props =>
    props.fade &&
    `
  position: absolute;
  top: 0;
  left: 0 !important;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.7s;
  counter-increment: embla;


  &.is-selected {
    opacity: 1;
    z-index: 1;
   transition: opacity 0.7s;
  }
  `};
`

export const SlidesContainer = styled.div`
  display: flex;
  flex-direction: row;
  will-change: transform;
  width: 100%;
  /* min-width: 100%; */
  max-width: ${props => `calc(${props.theme.mainMaxWidth + props.gap}px)`};
  padding: ${props =>
    props.gap >= props.theme.mobileGutter * 2
      ? 0
      : `0 calc(${props.theme.mobileGutter - props.gap / 2}px)`};

  @media ${device.desktop} {
    padding: ${props =>
      props.gap >= props.theme.desktopGutter * 2
        ? 0
        : `0 calc(${props.theme.desktopGutter - props.gap / 2}px)`};
  }

  @media ${device.large} {
    padding: 0;
  }

  ${Slide} {
    padding: ${props => (props.gap ? `0 ${props.gap / 2}px` : null)};
    width: ${props =>
      props.slidesToShow[0]
        ? `${100 / props.slidesToShow[0]}%`
        : `${100 / props.slidesToShow}%`};

    @media ${device.desktop} {
      width: ${props =>
        props.slidesToShow[1] && `${100 / props.slidesToShow[1]}%`};
    }
  }

  ${props =>
    props.loop &&
    `
    // @media ${device.desktop} {
    padding:0 !important;
    max-width: calc(100% + ${props.gap}px);
    width: calc(100% + ${props.gap}px);
    margin: 0 -${props.gap}px;
    // }
`};

  ${props =>
    props.fade &&
    `
    transform: none !important;
    width: 100%;
    max-width: ${props.theme.mainMaxWidth}px !important;
    height:600px;
    position:relative;

    ${Slide} {
      padding:0;
    }
`};
`

export const ButtonsContainer = styled.div`
  margin-top: 30px;
  display: flex;
`

const DotHeight = `20px`

export const DotsContainer = styled.div`
  display: flex;
  margin-top: 30px;
  margin-left: -10px;
  height: ${DotHeight};
`

export const DotButton = styled.button`
  height: ${DotHeight};
  width: ${DotHeight};
  padding: 0;
  transition: 120ms;
  margin-left: 10px;
  cursor: pointer;
  border-radius: 50%;
  border: 1px solid ${props => (props.selected ? "grey" : "transparent")};
  position: relative;

  :before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    transition: 120ms;
    height: 6px;
    width: 6px;
    border-radius: 50%;
    background: black;
    opacity: ${props => (props.selected ? "0.6" : "0.4")};
  }
`
