import styled from "styled-components";

export const CarsListStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  row-gap: 50px;
  column-gap: 29px;
  margin-top: ${(props) => props.$top || "50px"};
  margin-bottom: 100px;
`;

export const BtnLoadMore = styled.p`
  display: block;
  margin: 0 auto;
  margin-bottom: 50px;
  padding: 20px;
  color: #3470ff;
  font-size: 16px;
  font-weight: 500;
  text-decoration-line: underline;
  cursor: pointer;

  &:hover,
  &:focus {
    color: #0b44cd;
  }
`;
