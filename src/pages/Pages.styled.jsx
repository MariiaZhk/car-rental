import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.section`
  margin: 0 auto;
  width: 100%;
  background-image: ${(props) => props.$url || "none"};
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  width: 1440px;
  margin: 0 auto;
  padding: 0px 128px;
  margin-bottom: 0px;
  margin-top: 0px;
`;
export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
`;
export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 900px;
  padding: 120px;
  border-radius: 20px;
`;

export const Title = styled.h1`
  font-size: 60px;
  font-weight: 900;
  background-color: transparent;
  text-transform: uppercase;
  color: #3470ff;
`;
export const Subtitle = styled.h2`
  font-size: 30px;
  font-weight: 700;
  text-transform: uppercase;
  color: #fff;
`;
export const Paragraph = styled.h3`
  font-weight: 600;
  font-size: 20px;
  color: #fff;
`;

export const OrderBtn = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 35px;
  margin-bottom: 35px;
  width: 180px;
  height: 48px;
  outline: none;
  padding: 10px;
  background: #3470ff;
  border: none;
  border-radius: 22px;
  color: #131212;
  font-size: 22px;
  font-weight: 900;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s;
  &:hover,
  &:focus {
    background-color: #0b44cd;
  }
`;
export const Phone = styled.span`
  padding-left: 10px;
  color: #3470ff;
`;
