import styled from "styled-components"
import { device, size } from "utils/breakpoints"
import { Grid, Col, Row } from "react-styled-flexboxgrid"

export const FlexBoxRow = styled(Row)``

export const FlexBoxCol = styled(Col)`
  display: flex !important;
  flex-basis: ${props => props.xs && `calc(100% / (12 / ${props.xs}))`};
  max-width: ${props => props.xs && `calc(100% / (12 / ${props.xs}))`};

  ${props =>
    props.c1 && props.c1[0] < size.tablet
      ? `
      @media (min-width: ${props.c1[0]}px) {
        flex-basis: calc(100% / (12 / ${props.c1[1]}));
      max-width: calc(100% / (12 / ${props.c1[1]}));  
    } 
      `
      : null};

  ${props =>
    props.c2 && props.c2[0] < size.tablet
      ? `
      @media (min-width: ${props.c1[0]}px) {
        flex-basis: calc(100% / (12 / ${props.c2[1]}));
      max-width: calc(100% / (12 / ${props.c2[1]}));  
    } 
      `
      : null};

  @media (min-width: ${props => props.sm && `768px`}) {
    flex-basis: ${props => props.sm && `calc(100% / (12 / ${props.sm}))`};
    max-width: ${props => props.sm && `calc(100% / (12 / ${props.sm}))`};
  }

  ${props =>
    props.c1 && props.c1[0] < size.desktop && props.c1[0] > size.tablet
      ? `
      @media (min-width: ${props.c1[0]}px) {
        flex-basis: calc(100% / (12 / ${props.c1[1]}));
      max-width: calc(100% / (12 / ${props.c1[1]}));  
    } 
      `
      : null};

  ${props =>
    props.c2 && props.c2[0] < size.desktop && props.c2[0] > size.tablet
      ? `
      @media (min-width: ${props.c2[0]}px) {
        flex-basis: calc(100% / (12 / ${props.c2[1]}));
      max-width: calc(100% / (12 / ${props.c2[1]}));  
    } 
      `
      : null};

  @media (min-width: ${props => props.md && `1024px`}) {
    flex-basis: ${props => props.md && `calc(100% / (12 / ${props.md}))`};
    max-width: ${props => props.md && `calc(100% / (12 / ${props.md}))`};
  }

  ${props =>
    props.c1 && props.c1[0] < size.large && props.c1[0] > size.desktop
      ? `
      @media (min-width: ${props.c1[0]}px) {
        flex-basis: calc(100% / (12 / ${props.c1[1]}));
      max-width: calc(100% / (12 / ${props.c1[1]}));  
    } 
      `
      : null};

  ${props =>
    props.c2 && props.c2[0] < size.large && props.c2[0] > size.desktop
      ? `
      @media (min-width: ${props.c2[0]}px) {
        flex-basis: calc(100% / (12 / ${props.c2[1]}));
      max-width: calc(100% / (12 / ${props.c2[1]}));  
    } 
      `
      : null};

  @media (min-width: ${props => props.lg && `1280px`}) {
    flex-basis: ${props => props.lg && `calc(100% / (12 / ${props.lg}))`};
    max-width: ${props => props.lg && `calc(100% / (12 / ${props.lg}))`};
  }

  ${props =>
    props.c1 && props.c1[0] > size.large
      ? `
      @media (min-width: ${props.c1[0]}px) {
        flex-basis: calc(100% / (12 / ${props.c1[1]}));
      max-width: calc(100% / (12 / ${props.c1[1]}));  
    } 
      `
      : null};

  ${props =>
    props.c2 && props.c2[0] > size.large
      ? `
      @media (min-width: ${props.c2[0]}px) {
        flex-basis: calc(100% / (12 / ${props.c2[1]}));
      max-width: calc(100% / (12 / ${props.c2[1]}));  
    } 
      `
      : null};
`

export const FlexBoxGrid = styled(Grid)`
  padding: 0;
  margin: 0 auto;
  width: ${props =>
    props.fullWidth
      ? "100%"
      : `calc(100% - 2*${props.theme.mobileGutter}px)`} !important;
  max-width: ${props =>
    props.fullWidth ? "100%" : `${props.theme.mainMaxWidth}px`};

  /* accounts for bottom row margin-bottom */
  margin-bottom: ${props =>
    props.rowGap
      ? `-${props.rowGap[0]}px`
      : props.gap
      ? `-${props.gap[0]}px`
      : `-${props.theme.mobileGap}px`};
  @media ${device.tablet} {
    margin-bottom: ${props =>
      props.rowGap
        ? `-${props.rowGap[1]}px`
        : props.gap
        ? `-${props.gap[1]}px`
        : `-${props.theme.tablet}px`};
  }

  @media ${device.desktop} {
    margin-bottom: ${props =>
      props.rowGap
        ? `-${props.rowGap[2]}px`
        : props.gap
        ? `-${props.gap[2]}px`
        : `-${props.theme.desktopGap}px`};
    width: ${props =>
      props.fullWidth
        ? "100%"
        : `calc(100% - 2*${props.theme.desktopGutter}px)`} !important;
  }

  @media ${device.large} {
    margin-bottom: ${props =>
      props.rowGap
        ? `-${props.rowGap[3]}px`
        : props.gap
        ? `-${props.gap[3]}px`
        : `-${props.theme.largeGap}px`};
  }

  /* accounts for padding on ends of each line */
  ${FlexBoxRow} {
    margin: ${props =>
      props.gap
        ? `0 -${props.gap[0] / 2}px`
        : `0 -${props.theme.mobileGap / 2}px`};

    @media ${device.tablet} {
      margin: ${props =>
        props.gap
          ? `0 -${props.gap[1] / 2}px`
          : `0 -${props.theme.tabletGap / 2}px`};
    }

    @media ${device.desktop} {
      margin: ${props =>
        props.gap
          ? `0 -${props.gap[2] / 2}px`
          : `0 -${props.theme.desktopGap / 2}px`};
    }

    @media ${device.large} {
      margin: ${props =>
        props.gap
          ? `0 -${props.gap[3] / 2}px`
          : `0 -${props.theme.largeGap / 2}px`};
    }
  }

  /* adds grid-column-gap and grid-row-gap*/
  ${FlexBoxCol} {
    margin-bottom: ${props =>
      props.rowGap
        ? `${props.rowGap[0]}px`
        : props.gap
        ? `${props.gap[0]}px`
        : `${props.theme.mobileGap}px`};
    padding: ${props =>
      props.gap
        ? ` 0 ${props.gap[0] / 2}px`
        : `0 ${props.theme.mobileGap / 2}px`};

    @media ${device.tablet} {
      margin-bottom: ${props =>
        props.rowGap
          ? `${props.rowGap[1]}px`
          : props.gap
          ? `${props.gap[1]}px`
          : `${props.theme.tabletGap}px`};
      padding: ${props =>
        props.gap
          ? ` 0 ${props.gap[1] / 2}px`
          : `0 ${props.theme.tabletGap / 2}px`};
    }

    @media ${device.desktop} {
      margin-bottom: ${props =>
        props.rowGap
          ? `${props.rowGap[2]}px`
          : props.gap
          ? `${props.gap[2]}px`
          : `${props.theme.desktopGap}px`};
      padding: ${props =>
        props.gap
          ? ` 0 ${props.gap[2] / 2}px`
          : `0 ${props.theme.desktopGap / 2}px`};
    }

    @media ${device.large} {
      margin-bottom: ${props =>
        props.rowGap
          ? `${props.rowGap[3]}px`
          : props.gap
          ? `${props.gap[3]}px`
          : `${props.theme.largeGap}px`};
      padding: ${props =>
        props.gap
          ? ` 0 ${props.gap[3] / 2}px`
          : `0 ${props.theme.largeGap / 2}px`};
    }
  }
`
