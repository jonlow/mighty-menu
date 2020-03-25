import styled from "styled-components"
import { Link } from "gatsby"

import { Button } from "../Button"

import { device } from "../../utils/breakpoints.js"

export const TeaserContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: ${props => (props.row ? "row" : "column")};
  align-items: ${props => (props.centered ? "center" : "flex-start")};
  justify-items: flex-start;
  position: relative;
`

export const WrappingLink = styled(Link)`
  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 4;
  }
`

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  /* height: 100%; */
  flex-shrink: 0;
  padding-top: 60%;
  flex-basis: ${props => (props.row ? "50%" : null)};
  margin-bottom: ${props => (props.row ? "0" : "10px")};
  overflow: hidden;
  background: ${props => props.theme.navy};

  .gatsby-image-wrapper,
  > img {
    position: absolute !important;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    margin: 0;
    object-fit: cover;
    display: block;
    transition: 500ms;
    transform: scale(1);

    /* ${TeaserContainer}:hover & {
      transform: scale(1.1);
    } */
  }
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${props =>
    props.row ? "flex-start" : props.centered ? "center" : "flex-start"};
  justify-content: ${props => (props.centered ? "center" : "flex-start")};
  height: 100%;
  padding-right: 20px;
  padding-left: ${props => (props.row || props.centered ? "20px" : "0")};

  ${props =>
    props.overlapped &&
    `
    position:absolute;
    top:0;
    left:0;
    height:100%;
    width:100%;
  `};
`

export const Title = styled.h3`
  margin-bottom: 10px;
  transition: color 100ms;

  ${TeaserContainer}:hover & {
    color: ${props => props.theme.primaryColor};
  }
`

export const CategoriesContainer = styled.div`
  display: inline-grid;
  grid-auto-flow: column;
  font-weight: 600;
  grid-gap: 10px;
  margin-bottom: 10px;

  ${props =>
    props.catsTopRight &&
    `
		position: absolute;
		top: 0;
		right: 0;
	`};
`

export const Excerpt = styled.p`
  line-height: 150%;
`

export const Date = styled.span`
  font-weight: 600;
  margin-bottom: 10px;
`

export const Tag = styled(Date)``

export const TeaserButton = styled(Button)``
