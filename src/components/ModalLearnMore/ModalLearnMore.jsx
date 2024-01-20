import { useEffect } from "react";
import {
  Backdrop,
  CardModalContainer,
  Description,
  Image,
  ImgDescriptionWrapper,
  Modal,
  ModalImgWrapper,
  ParagraphDescription,
  Subtitle,
  TitleModal,
  TotalDescriptionWrap,
} from "./ModalLearnMore.styled";
import {
  DescriptionList,
  DescriptionListWrapper,
  Item,
  Span,
} from "../CarItem/CarItem.styled";

export const ModalLearnMore = ({ car, closeModal }) => {
  const {
    id,
    make,
    model,
    year,
    img,
    // rentalPrice,
    // mileage,
    type,
    functionalities,
    address,
    fuelConsumption,
    engineSize,
    description,
    accessories,
    // rentalConditions,
  } = car;
  const place = address?.split(", ");

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const onBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [closeModal]);

  //   const onCancelButton = () => {
  //     closeModal();
  //   };

  return (
    <Backdrop onClick={onBackdropClick}>
      <Modal>
        <CardModalContainer key={id}>
          <ImgDescriptionWrapper>
            <ModalImgWrapper>
              <Image src={img} alt={make} />
            </ModalImgWrapper>
            <TotalDescriptionWrap>
              <Description>
                <TitleModal>
                  {make} <Span> {model}</Span>, {year}
                </TitleModal>
                <DescriptionListWrapper>
                  <DescriptionList>
                    <Item>{place[1]}</Item>
                    <Item>{place[2]}</Item>
                    <Item>{id}</Item>
                    <Item>Year: {year}</Item>
                    <Item>Type: {type}</Item>
                  </DescriptionList>
                  <DescriptionList>
                    <Item>Fuel Consumption: {fuelConsumption}</Item>
                    <Item>Engine Size: {engineSize}</Item>
                  </DescriptionList>
                </DescriptionListWrapper>
                <ParagraphDescription>{description}</ParagraphDescription>
              </Description>
              <Description>
                <Subtitle>Accessories and functionalities: </Subtitle>
                <DescriptionListWrapper>
                  <DescriptionList>
                    {accessories?.map((accesoire) => (
                      <Item key={accesoire}>{accesoire}</Item>
                    ))}
                  </DescriptionList>
                  <DescriptionList>
                    {functionalities?.map((functionality) => (
                      <Item key={functionality}>{functionality}</Item>
                    ))}
                  </DescriptionList>
                </DescriptionListWrapper>
              </Description>
              <Description>
                <Subtitle>Rental Conditions:</Subtitle>
              </Description>
            </TotalDescriptionWrap>
          </ImgDescriptionWrapper>
          {/* <BtnContainer>
            <Btn>Learn more</Btn>
          </BtnContainer> */}
        </CardModalContainer>
      </Modal>
    </Backdrop>
  );
};
