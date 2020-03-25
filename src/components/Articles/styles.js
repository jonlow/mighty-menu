import styled from "styled-components"
import { device } from "../../utils/breakpoints.js"

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
`
export const Title = styled.h1`
  font-size: 54px;
  color: #19191a;
  letter-spacing: -1.67px;
  line-height: 84px;
  padding-bottom: 23px;

  span {
    color: #e2e6e9;
  }

  @media ${device.tablet} {
    font-size: 64px;
  }
`
export const Article = styled.div`
  border-bottom: 1px solid #e2e6e9;
  padding-bottom: 33px;
  padding-top: 41px;
  position: relative;

  :hover {
    overflow: hidden;
    width: ${props => `calc(100% + 2 *${props.theme.mobileGutter}px)`};
    margin-left: -20px;
    padding-left: 20px;
    background-color: #f5f8f8;

    box-shadow: 0 15px 25px 0 rgba(0, 0, 0, 0.08);
    border-bottom: 1px solid transparent;

    @media ${device.desktop} {
      width: 150vw;
      margin-left: -50vw;
      padding-left: 50vw;
    }
  }
`
export const Categories = styled.div`
  font-size: 10px;
  letter-spacing: 0.5px;
  line-height: 24px;
  text-transform: uppercase;
  color: ${props => props.theme.primaryColor};

  pointer-events: none;
  display: inline-block;
  z-index: 3;
  position: relative;

  a {
    padding-right: 10px;
    text-decoration: none;
    color: inherit;
    font-weight: 600;
    pointer-events: all;

    :hover {
      color: ${props => props.theme.btnHoverColor};
    }
  }

  @media ${device.tablet} {
    font-size: 12px;
  }
`
export const ArticleTitle = styled.h5`
  font-size: 24px;
  color: #19191a;
  letter-spacing: -0.67px;
  line-height: 48px;
  text-transform: none;

  a {
    padding-right: 10px;
    text-decoration: none;
    color: inherit;

    ::before {
      position: absolute;
      content: "";
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
    }
  }

  @media ${device.tablet} {
    font-size: 32px;
  }
`
