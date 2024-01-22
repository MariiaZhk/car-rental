import { useSelector } from "react-redux";
import { CarItem } from "../components/CarItem/CarItem";
import { CarsListStyled } from "../components/CarsList/CarsList.styled";
import { selectFavoriteCar } from "../redux/selectors";
import { Container, Section } from "./Pages.styled";

export const FavoritesPage = () => {
  const favoriteCars = useSelector(selectFavoriteCar);

  return (
    <Container>
      <Section>
        {favoriteCars?.length > 0 ? (
          <CarsListStyled $top="120px">
            {favoriteCars?.map((car) => (
              <CarItem car={car} key={car.id} />
            ))}
          </CarsListStyled>
        ) : (
          <p>Please select your favorite cars.</p>
        )}
      </Section>
    </Container>
  );
};
