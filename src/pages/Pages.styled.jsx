import styled from "styled-components";

export const Container = styled.section`
  margin: 0 auto;
  width: 100%;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  width: 1440px;
  margin: 0 auto;
  padding: 0px 128px;
  margin-bottom: 130px;
  margin-top: 0px;
`;

export const BtnLoadMore = styled.p`
  display: block;
  margin: 0 auto;
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
