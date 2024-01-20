import { CarsList } from "../components/CarsList/CarsList";
import { BtnLoadMore, Container, Section } from "./Pages.styled";

export const CatalogPage = () => {
  return (
    <Container>
      <Section>
        <h1>Cars Catalog</h1>
        <CarsList />
        <BtnLoadMore>Load more</BtnLoadMore>
      </Section>
    </Container>
  );
};
