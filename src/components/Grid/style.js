import styled from "styled-components"
import { device } from "breakpoints"

export const GridWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: ${props =>
    props.cols ? `repeat(${props.cols[0]},1fr)` : null};
  grid-template-rows: ${props =>
    props.rows ? `repeat(${props.rows[0]},1fr)` : null};
  grid-auto-flow: ${props => props.flow || null};
  grid-gap: ${props =>
    props.gap ? `${props.gap[0]}px` : `${props.theme.mobileGap}px`};
  grid-row-gap: ${props => (props.rowGap ? `${props.rowGap[0]}px` : null)};
  grid-column-gap: ${props => (props.colGap ? `${props.colGap[0]}px` : null)};

  @media ${device.tablet} {
    grid-gap: ${props =>
      props.gap ? `${props.gap[1]}px` : `${props.theme.tabletGap}px`};
    grid-template-columns: ${props =>
      props.cols ? `repeat(${props.cols[1]},1fr)` : null};
    grid-template-rows: ${props =>
      props.rows ? `repeat(${props.rows[1]},1fr)` : null};
    grid-row-gap: ${props => (props.rowGap ? `${props.rowGap[1]}px` : null)};
    grid-column-gap: ${props => (props.colGap ? `${props.colGap[1]}px` : null)};
  }

  @media ${device.desktop} {
    grid-gap: ${props =>
      props.gap ? `${props.gap[2]}px` : `${props.theme.desktopGap}px`};
    grid-template-columns: ${props =>
      props.cols ? `repeat(${props.cols[2]},1fr)` : null};
    grid-template-rows: ${props =>
      props.rows ? `repeat(${props.rows[2]},1fr)` : null};
    grid-row-gap: ${props => (props.rowGap ? `${props.rowGap[2]}px` : null)};
    grid-column-gap: ${props => (props.colGap ? `${props.colGap[2]}px` : null)};
  }

  @media ${device.large} {
    grid-gap: ${props =>
      props.gap ? `${props.gap[3]}px` : `${props.theme.largeGap}px`};
    grid-template-columns: ${props =>
      props.cols ? `repeat(${props.cols[3]},1fr)` : null};
    grid-template-rows: ${props =>
      props.rows ? `repeat(${props.rows[3]},1fr)` : null};
    grid-row-gap: ${props => (props.rowGap ? `${props.rowGap[3]}px` : null)};
    grid-column-gap: ${props => (props.colGap ? `${props.colGap[3]}px` : null)};
  }
`
