import styled from "styled-components";

export const CarItemStyled = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 274px;
  height: 426px;
  gap: 28px;
  flex-basis: calc((100% - 3 * 29px) / 4);
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  gap: 14px;
`;

export const ImgWrapper = styled.div`
  position: relative;
  display: block;
  overflow: hidden;
  width: 100%;
  height: 268px;
  border-radius: 14px;
`;

export const Img = styled.img`
  position: absolute;
  overflow: hidden;
  right: -65px;
  top: 0;
  height: 268px;
  background: linear-gradient(
      180deg,
      rgba(18, 20, 23, 0.5) 2.5%,
      rgba(18, 20, 23, 0) 41.07%
    ),
    #f3f3f2;
`;

export const CarDescriptionWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 8px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  font-size: 16px;
  font-weight: 500;
  align-items: center;
`;

export const Title = styled.h3`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
`;

export const Span = styled.span`
  color: #3470ff;
`;

export const DescriptionListWrapper = styled.div`
  display: flex;
  gap: 4px;
  flex-direction: column;
`;

export const DescriptionList = styled.ul`
  display: inline-flex;
  gap: 6px;
  overflow: hidden;
  color: rgba(18, 20, 23, 0.5);
  white-space: nowrap;
  overflow: hidden;
`;

export const Item = styled.li`
  display: flex;
  &:not(:last-child)::after {
    content: "|";
    width: 1px;
    height: 16px;
    margin-left: 6px;
    color: rgba(18, 20, 23, 0.1);
  }
`;

export const HeartBtn = styled.button`
  position: absolute;
  display: flex;
  top: 14px;
  right: 14px;
  background: transparent;
  border: none;

  cursor: pointer;
  width: 18px;
  height: 18px;
`;

export const Svg = styled.svg`
  fill: ${(props) => props.fill || "transparent"};
  stroke: ${(props) => props.stroke || "#fffff"};
`;

export const BtnContainer = styled.div`
  display: flex;
`;
export const Btn = styled.button`
  margin-top: auto;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 44px;
  padding: 12px;
  border-radius: 12px;
  border: none;
  background: #3470ff;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.4;

  &:hover,
  &:focus {
    background: #0b44cd;
  }
`;
