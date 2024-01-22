import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderStyled = styled.header`
  position: fixed;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #ffffff;
  border-bottom: 2px solid #3470ff;
`;

export const NavStyled = styled.nav`
  position: relative;
  display: flex;
  gap: 20px;
`;

export const NavLinkStyled = styled(NavLink)`
  line-height: 60px;
  padding: 0 20px;
  font-size: 26px;
  font-weight: 900;
  text-transform: uppercase;
  color: #000000;
  transition: all 0.3s;

  &:hover,
  &:focus {
    color: #0b44cd;
  }
  &.active {
    color: #0b44cd;
  }
`;
