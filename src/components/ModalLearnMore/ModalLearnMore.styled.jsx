import styled from "styled-components";

export const Backdrop = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 10;
  background: rgba(18, 20, 23, 0.5);
  backdrop-filter: blur(1px);
`;

export const Modal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 40px;
  background-color: #fff;
  border-radius: 24px;
  width: 541px;
  /* height: 752px; */
`;

export const CardModalContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 24px;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

export const ImgDescriptionWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 14px;
`;

export const ModalImgWrapper = styled.div`
  position: relative;
  display: block;
  overflow: hidden;
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 14px;
  background: #f3f3f2;
`;

export const Image = styled.img`
  position: absolute;
  width: 461px;
  top: -40px;
  right: 0;
  background: linear-gradient(
      180deg,
      rgba(18, 20, 23, 0.5) 2.5%,
      rgba(18, 20, 23, 0) 41.07%
    ),
    #f3f3f2;
`;

export const TotalDescriptionWrap = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 24px;
`;

export const Description = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;
export const TitleModal = styled.h3`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
`;
export const ParagraphDescription = styled.p`
  margin-top: 14px;
  font-size: 14px;
  line-height: 1.42;
  height: 40px;
  overflow: hidden;
`;

export const Subtitle = styled.h4`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
  margin-bottom: 8px;
`;

export const RentalConditionsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  color: #363535;
`;
export const RentalConditionsItem = styled.li`
  padding: 7px 14px;
  border-radius: 35px;
  background: #f9f9f9;
`;

export const Button = styled.button`
  margin-top: auto;
  display: flex;
  justify-content: center;
  width: 168px;
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

export const CloseBtn = styled.button`
  position: absolute;
  background: transparent;
  border: none;
  width: 24px;
  height: 24px;
  top: 16px;
  right: 16px;
  cursor: pointer;
  stroke: #121417;
`;
