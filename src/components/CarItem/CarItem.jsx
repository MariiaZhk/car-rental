import { useEffect, useState } from "react";
import {
  Btn,
  BtnContainer,
  CarDescriptionWrapper,
  CarItemStyled,
  CardContainer,
  DescriptionList,
  DescriptionListWrapper,
  Img,
  ImgWrapper,
  Item,
  Span,
  Svg,
  TitleWrapper,
} from "./CarItem.styled";
import { ModalLearnMore } from "../ModalLearnMore/ModalLearnMore";
import { useDispatch, useSelector } from "react-redux";
import { selectFavoriteCar } from "../../redux/selectors";
import { deleteFavoriteCar, setFavoriteCar } from "../../redux/sliceFavorites";
import Heart from "../../assets/heart.svg";

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
  const place = address?.split(", ");
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

  const onHeartClick = () => {
    isCarFavorite
      ? dispatch(deleteFavoriteCar(id))
      : dispatch(setFavoriteCar(car));
  };

  return (
    <CarItemStyled key={id}>
      <CardContainer>
        <ImgWrapper>
          <Img src={img} alt={make} />
          <Svg onClick={onHeartClick}>
            <img src={Heart} alt="" />
          </Svg>
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
              <Item>{place[1]}</Item>
              <Item>{place[2]}</Item>
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
