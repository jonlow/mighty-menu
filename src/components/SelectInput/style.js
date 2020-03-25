import styled from "styled-components"

export const SelectContainer = styled.div`
  width: 100%;
  max-width: 500px;

  .css-1hwfws3 {
    padding: 0;
  }

  .basic__control {
    box-shadow: 0;
    background-color: #9e1164;
    /* border-radius: state.isFocused ? "3px 3px 0 0" : "3px", */
    border: none;
    outline: none !important;
    height: 50px;
    cursor: pointer;
    padding: 0 20px;
    :hover {
      border-color: 0;
      background-color: #84004b;
    }
  }
  .basic__indicator-separator {
    display: none;
  }
  .basic__menu {
    margin-top: 0;
  }
  .basic__menu-list {
    padding-top: 0;
    padding-bottom: 0;
  }

  .basic__option {
    color: #9e1164;
    font-weight: 600;
    line-height: 16px;
    font-size: 16px;
    letter-spacing: 0;

    padding: 20px;
    padding-left: 10px;
  }
  .basic__option--is-focused {
    background-color: #ccc;
    transition: 90ms;

    cursor: pointer;
  }

  .basic__option--is-selected {
    background-color: #ccc;
    font-weight: 600;
    color: #9e1164;
  }
`

export const ArrowContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 16px;
    transform: rotateX(${props => (props.open ? "180deg" : "0")});
    transition: ${props => (props.open ? "300ms" : "300ms")};
    path {
      stroke: white;
    }
  }
`

export const SingleValueContainer = styled.div`
  span {
    font-weight: 600;
    color: white;
  }
`

export const Placeholder = styled(SingleValueContainer)`
  background: red;
`
