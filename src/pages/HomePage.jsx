import { Link } from "react-router-dom";
import { Container, Section } from "./Pages.styled";

export const HomePage = () => {
  return (
    <Container>
      <Section>
        <h1>HomePage</h1>
        <p>
          Choose the best for you <Link to="/catalog">HERE</Link>
        </p>
      </Section>
    </Container>
  );
};
