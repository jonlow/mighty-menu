import styled from "styled-components"

export const PaginationContainer = styled.div`
  display: flex;
  opacity: ${props => (props.noResults || props.hide ? "0" : "1")};
  transition: 140ms;
  align-items: center;
`
export const PageNumberList = styled.ul`
  list-style: none;
  display: flex;
  margin: 0 15px;
`

export const ListItem = styled.li`
  display: ${props => (props.hidden ? "none" : "block")};
  padding: 0 7px;
  position: relative;
  }
`

export const Number = styled.button`
  outline: none;
  font-size: 18px;
  cursor: pointer;
  padding: 0;
  color: ${props => (props.active ? "white" : props.theme.primaryColor)};
  height: 32px;
  width: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => (props.active ? props.theme.primaryColor : "none")};
  border: none;
  border-radius: 50%;
  transition: 80ms;
  font-weight: ${props => (props.active ? 600 : 500)};

  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`

export const Skip = styled(Number)`
  height: auto;
  width: auto;
`

export const NextButton = styled.button`
  display: inline-flex;
  background: ${props => props.theme.primaryColor};
  border-radius: 2px;
  font-weight: 600;
  outline: none;
  border: none;
  font-size: 14px;
  padding: 0 18px;
  height: 30px;
  width: 50px;
  color: white;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  text-align: center;
  pointer-events: ${props => props.disabled && "none"};
  opacity: ${props => (props.disabled ? 0.3 : 1)};

  :hover {
    background: ${props => props.theme.btnHoverColor};
    transition: 90ms;
  }

  @media (min-width: 380px) {
    width: 66px;
  }
`

export const PreviousButton = styled(NextButton)``
