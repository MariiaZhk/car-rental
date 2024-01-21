import { CarsList } from "../components/CarsList/CarsList";
import { Filters } from "../components/Filters/Filters";
import { Container, Section } from "./Pages.styled";

export const CatalogPage = () => {
  return (
    <Container>
      <Section>
        <Filters />
        <CarsList />
      </Section>
    </Container>
  );
};
