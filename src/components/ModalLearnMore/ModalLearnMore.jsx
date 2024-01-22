import { useEffect } from "react";
import {
  Backdrop,
  Button,
  CardModalContainer,
  CloseBtn,
  Description,
  Image,
  ImgDescriptionWrapper,
  Modal,
  ModalImgWrapper,
  ParagraphDescription,
  RentalConditionsItem,
  RentalConditionsList,
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
import closeBtn from "../../assets/x.svg";

export const ModalLearnMore = ({ car, closeModal }) => {
  const {
    id,
    make,
    model,
    year,
    img,
    rentalPrice,
    mileage,
    type,
    functionalities,
    address,
    fuelConsumption,
    engineSize,
    description,
    accessories,
    rentalConditions,
  } = car;
  const place = address?.split(", ");
  const conditions = rentalConditions.split("\n");
  const age = conditions[0].split(": ");
  const price = parseInt(rentalPrice?.replace("$", ""));

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

  return (
    <Backdrop onClick={onBackdropClick}>
      <Modal>
        <CloseBtn type="button" onClick={() => closeModal()}>
          <img src={closeBtn} alt=""></img>
        </CloseBtn>

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
                    {accessories?.map((accessory) => (
                      <Item key={accessory}>{accessory}</Item>
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
                <DescriptionListWrapper $gap="8px">
                  <RentalConditionsList>
                    <RentalConditionsItem>
                      {age[0]}: <Span>{age[1]}</Span>
                    </RentalConditionsItem>
                    <RentalConditionsItem>{conditions[1]}</RentalConditionsItem>
                  </RentalConditionsList>
                  <RentalConditionsList>
                    <RentalConditionsItem>{conditions[2]}</RentalConditionsItem>
                    <RentalConditionsItem>
                      Mileage: <Span>{mileage}</Span>
                    </RentalConditionsItem>
                    <RentalConditionsItem>
                      Price: <Span>{price}$</Span>
                    </RentalConditionsItem>
                  </RentalConditionsList>
                </DescriptionListWrapper>
              </Description>
            </TotalDescriptionWrap>
          </ImgDescriptionWrapper>

          <Button>Rental Car</Button>
        </CardModalContainer>
      </Modal>
    </Backdrop>
  );
};
