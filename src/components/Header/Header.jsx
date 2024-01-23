import {
  CompanyTitle,
  ImgLogo,
  Logo,
  NavLinkStyled,
  NavStyled,
} from "./Header.styled";
import { HeaderStyled } from "./Header.styled";
import LogoImg from "../../assets/favicon.jpg";

export const Header = () => {
  return (
    <HeaderStyled>
      <Logo to="/">
        <ImgLogo src={LogoImg} alt="Logo" />
        <CompanyTitle>CarToday</CompanyTitle>
      </Logo>
      <NavStyled>
        <NavLinkStyled to="/">Home</NavLinkStyled>
        <NavLinkStyled to="/catalog">Catalog</NavLinkStyled>
        <NavLinkStyled to="/favorites">Favorites</NavLinkStyled>
      </NavStyled>
    </HeaderStyled>
  );
};
