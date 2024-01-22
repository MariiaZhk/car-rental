import ImgSrc from "../assets/cybertrack.jpg";
import {
  Container,
  OrderBtn,
  Paragraph,
  Phone,
  Section,
  Subtitle,
  Title,
  TitleWrapper,
  Wrapper,
} from "./Pages.styled";

export const HomePage = () => {
  return (
    <Container $url={ImgSrc && `url(${ImgSrc})`}>
      <Section>
        <Wrapper>
          <TitleWrapper>
            <Subtitle>Rent the best </Subtitle>
            <Title>car today</Title>
            <Subtitle>Find the perfect solution</Subtitle>
            <Paragraph>
              We know the difference in the details and that's why our car
              rental services stands out for the quality and good taste
            </Paragraph>
            <OrderBtn to="/catalog">Order now</OrderBtn>
            <Paragraph>
              Contact us: <Phone>+380730000000</Phone>
            </Paragraph>
          </TitleWrapper>
        </Wrapper>
      </Section>
    </Container>
  );
};
