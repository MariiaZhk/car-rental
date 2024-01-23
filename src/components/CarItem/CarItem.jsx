import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectFavoriteCar } from "../../redux/selectors";
import { deleteFavoriteCar, setFavoriteCar } from "../../redux/sliceFavorites";
import { ModalLearnMore } from "../ModalLearnMore/ModalLearnMore";
import Heart from "../../assets/heart.svg";
import HeartFavorite from "../../assets/heart-favorite.svg";
import {
  Btn,
  BtnContainer,
  CarDescriptionWrapper,
  CarItemStyled,
  CardContainer,
  DescriptionList,
  DescriptionListWrapper,
  HeartBtn,
  Img,
  ImgWrapper,
  Item,
  Span,
  TitleWrapper,
} from "./CarItem.styled";

export const CarItem = ({ car }) => {
  const {
    id,
    make,
    model,
    year,
    img,
    rentalPrice,
    rentalCompany,
    type,
    functionalities,
    address,
  } = car;

  const dispatch = useDispatch();
  const [isModalLearnMoreOpen, setIsModalLearnMoreOpen] = useState(false);
  const favoriteCars = useSelector(selectFavoriteCar);
  const [isCarFavorite, setIsCarFavorite] = useState(false);

  useEffect(() => {
    if (favoriteCars?.some((car) => car.id === id)) {
      setIsCarFavorite(true);
    } else {
      setIsCarFavorite(false);
    }
  }, [favoriteCars, id]);

  function onHeartBtnClick() {
    if (!isCarFavorite) {
      dispatch(setFavoriteCar(car));
    } else {
      dispatch(deleteFavoriteCar(id));
    }
  }

  return (
    <CarItemStyled key={id}>
      <CardContainer>
        <ImgWrapper>
          <Img src={img} alt={make} loading="lazy" />
          <HeartBtn onClick={onHeartBtnClick}>
            {isCarFavorite ? (
              <img src={HeartFavorite} alt="" />
            ) : (
              <img src={Heart} alt="" />
            )}
          </HeartBtn>
        </ImgWrapper>

        <CarDescriptionWrapper>
          <TitleWrapper>
            <h3>
              {make} <Span> {model}</Span>, {year}
            </h3>
            <p>{rentalPrice}</p>
          </TitleWrapper>
          <DescriptionListWrapper>
            <DescriptionList>
              <Item>{address.split(",")[1]}</Item>
              <Item>{address.split(",")[2]}</Item>
              <Item>{rentalCompany}</Item>
              <Item>Premium</Item>
            </DescriptionList>
            <DescriptionList>
              <Item>{type}</Item>
              <Item>{make}</Item>
              <Item>{id}</Item>
              <Item>{functionalities[0]}</Item>
            </DescriptionList>
          </DescriptionListWrapper>
        </CarDescriptionWrapper>
      </CardContainer>
      <BtnContainer>
        <Btn type="button" onClick={() => setIsModalLearnMoreOpen(true)}>
          Learn more
        </Btn>
        {isModalLearnMoreOpen && (
          <ModalLearnMore
            closeModal={setIsModalLearnMoreOpen}
            car={car}
            key={id}
          />
        )}
      </BtnContainer>
    </CarItemStyled>
  );
};
