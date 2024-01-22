import { NavLinkStyled, NavStyled } from "./Header.styled";
import { HeaderStyled } from "./Header.styled";

export const Header = () => {
  return (
    <HeaderStyled>
      <NavStyled>
        <NavLinkStyled to="/">Home</NavLinkStyled>
        <NavLinkStyled to="/catalog">Catalog</NavLinkStyled>
        <NavLinkStyled to="/favorites">Favorites</NavLinkStyled>
      </NavStyled>
    </HeaderStyled>
  );
};
