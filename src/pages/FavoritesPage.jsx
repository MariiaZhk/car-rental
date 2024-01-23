import { useSelector } from "react-redux";
import { CarItem } from "../components/CarItem/CarItem";
import { CarsListStyled } from "../components/CarsList/CarsList.styled";
import { selectFavoriteCar } from "../redux/selectors";
import { Container, Section, Warning } from "./Pages.styled";

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
          <Warning>
            <h2>Choose your favorite cars in the catalog.</h2>
          </Warning>
        )}
      </Section>
    </Container>
  );
};
